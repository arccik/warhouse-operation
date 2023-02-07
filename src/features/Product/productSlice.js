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
    }),
    getProducts: builder.query({
      query: () => "/products/get",
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = extendedApiSlice;
