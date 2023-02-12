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
      invalidatesTags: () => [{ type: "Item", _id: "LIST" }],
    }),
  }),
});

export const { useSubmitDataMutation } = extendedApiSlice;
