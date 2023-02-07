import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const palletAdapter = createEntityAdapter({
  selectId: (e) => e._id,
});

// const initialState = palletAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPallet: builder.mutation({
      query: (data) => ({
        url: `/pallets/add`,
        method: "POST",
        body: data,
      }),
      //   transformResponse: (response, meta, arg) => response.data,

      //   transformErrorResponse: (response, meta, arg) => response.status,
    }),
    getPallets: builder.query({
      query: (data) => "/pallets/get",
    }),
  }),
});

export const { useAddPalletMutation, useGetPalletsQuery } = extendedApiSlice;
