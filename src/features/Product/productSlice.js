import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const productAdapter = createEntityAdapter({
  selectId: (e) => e._id,
});

const initialState = productAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (page) => `/products/get?page=${page}`,
      providesTags: (result, error, args) => {
        if (!result) return [{ type: "Product", _id: "LIST" }];
        else {
          return [...result.map(({ _id }) => ({ type: "Product", _id }))];
        }
      },
    }),
    getNotSubmittedProducts: builder.query({
      query: (page) => `/products/get`,
      providesTags: (result, error, args) => {
        if (!result) return [{ type: "Product", _id: "LIST" }];
        else {
          return result.map(({ _id }) => ({ type: "Product", _id }));
        }
      },
    }),
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, args) => {
        return [{ type: "Product", _id: "LIST" }];
      },
    }),
    addManyProducts: builder.mutation({
      query: (data) => ({
        url: "/products/addmany",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, args) => {
        console.log("Add Many Products add tags ", result);
        return result
          ? result.map(({ _id }) => [{ type: "Product", _id }])
          : [{ type: "Product", _id: "LIST" }];
      },
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        url: `/products/update?id=${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Product", _id: "LIST" },
      ],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/delete?id=${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Product", _id: "LIST" },
      ],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetNotSubmittedProductsQuery,
  useAddProductMutation,
  useAddManyProductsMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = extendedApiSlice;
