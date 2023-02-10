import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const productAdapter = createEntityAdapter({
  selectId: (e) => e._id,
});

const initialState = productAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, args) => {
        console.log("add tags ", { result });

        return [{ type: "Product", _id: "LIST" }];
      },
    }),
    addManyProducts: builder.mutation({
      query: (data) => ({
        url: "/products/addmany",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ({ data }, error, args) => {
        console.log("add tags ", data);
        return [{ type: "Product", _id: "LIST" }];
      },
    }),
    getProducts: builder.query({
      query: () => "/products/get",
      providesTags: (result, error, args) => {
        if (!result) return [{ type: "Product", _id: "LIST" }];
        else {
          return [...result.map(({ _id }) => ({ type: "Product", _id }))];
        }
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useAddManyProductsMutation,
} = extendedApiSlice;
