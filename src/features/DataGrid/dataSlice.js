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
      providesTags: (result, error, arg) => {
        return result
          ? [...result.map(({ _id }) => ({ type: "Item", _id })), "Item"]
          : ["Item"];
      },

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
