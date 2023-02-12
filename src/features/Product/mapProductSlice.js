import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const mapProductAdapter = createEntityAdapter({
  selectId: (e) => e._id,
});

const initialState = mapProductAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addMapProduct: builder.mutation({
      query: (data) => ({
        url: "/map-products/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, args) => {
        console.log("add tags ", { result });
        return result
          ? result.map(({ _id }) => [{ type: "MapProduct", _id }])
          : [{ type: "MapProduct", _id: "LIST" }];
      },
    }),
    addManyMapProducts: builder.mutation({
      query: (data) => ({
        url: "/map-products/add?many=true",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result, error, args) => {
        return result
          ? result.map(({ _id }) => [{ type: "MapProduct", _id }])
          : [{ type: "MapProduct", _id: "LIST" }];
      },
    }),
    getAllMapProducts: builder.query({
      query: () => "/map-products/get",
      providesTags: (result, error, args) => {
        if (!result) return [{ type: "MapProduct", _id: "LIST" }];
        else {
          return [...result.map(({ _id }) => ({ type: "Product", _id }))];
        }
      },
    }),
    getOneMapProduct: builder.query({
      query: (id) => "/map-products/get",
      providesTags: (result, error, args) => {
        if (!result) return [{ type: "MapProduct", _id: "LIST" }];
        else {
          return [...result.map(({ _id }) => ({ type: "Product", _id }))];
        }
      },
    }),
  }),
});

export const {
  useAddManyMapProductsMutation,
  useAddMapProductMutation,
  useGetAllMapProductsQuery,
  useGetOneMapProductQuery,
} = extendedApiSlice;
