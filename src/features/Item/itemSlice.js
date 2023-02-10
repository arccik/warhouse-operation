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
    }),
    getItems: builder.query({
      query: (data) => "/item",
    }),
  }),
});

export const { useAddItemMutation, useGetItemsQuery } = extendedApiSlice;
