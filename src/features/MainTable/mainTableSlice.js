import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const mainTableAdapter = createEntityAdapter({
  selectId: (e) => e._id,
});

const initialState = mainTableAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    submitData: builder.mutation({
      query: () => ({
        url: `/maintable`,
        method: "GET",
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ scannedBy }) => ({
                type: "Item",
                _id: scannedBy,
              })),
              "Item",
            ]
          : [{ type: "Item", _id: "LIST" }],

      // transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});

export const { useSubmitDataMutation } = extendedApiSlice;
