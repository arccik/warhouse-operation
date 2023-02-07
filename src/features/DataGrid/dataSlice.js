import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";

const userAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.localCompare(a),
  selectId: (e) => e._id,
});

const initialState = userAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "/data",
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "RowData", id })), "RowData"]
          : ["RowData"],

      // transformResponse: (response, meta, arg) => response.data,
    }),
    addData: builder.mutation({
      query: (data) => ({
        url: `/data`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetDataQuery, useAddDataMutation } = extendedApiSlice;
