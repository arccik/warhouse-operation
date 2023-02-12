import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const itemAdapter = createEntityAdapter({
  selectId: (e) => e._id,
});

const initialState = itemAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addItem: builder.mutation({
      query: (data) => ({
        url: `/item`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ({ _id }, error, args) => {
        return [{ type: "Item", _id }];
      },
    }),
    updateItem: builder.mutation({
      query: (data) => ({
        url: `/item`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ({ _id }, error, args) => {
        return [{ type: "Item", _id }];
      },
    }),
    getItems: builder.query({
      query: () => "/item",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Item", _id })),
              { type: "Item", _id: "LIST" },
            ]
          : [{ type: "Item", _id: "LIST" }],
    }),
    getRecentScannedItems: builder.query({
      query: () => "/item?recent=true",
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ _id }) => ({ type: "Item", _id })),
              { type: "Item", _id: "LIST" },
            ]
          : [{ type: "Item", _id: "LIST" }];
      },
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/item`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: (result, error, args) => {
        return [{ type: "Item", _id: args }];
      },
    }),
  }),
});

export const {
  useGetItemsQuery,
  useGetRecentScannedItemsQuery,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = extendedApiSlice;
