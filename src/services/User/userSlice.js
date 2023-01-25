import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";
const userAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.open.localeCompare(a.open), // sort list
  selectId: (e) => e._id,
});

const initialState = userAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUserEntry: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/addentry`,
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response.data,

      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    getUserEntry: builder.query({
      query: () => "/userentry",
      transformResponse: (response, meta, arg) => response.data,
    }),

    // transformFromResponse: (responseData) => {
    //   return bothAdapter.setAll(initialState, responseData);
    // },
  }),
});
export const { useAddUserEntryMutation, useGetUserEntryQuery } =
  extendedApiSlice;
