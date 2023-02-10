import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../apiSlice";


const userAdapter = createEntityAdapter({
  selectId: (e) => e._id,
});

const initialState = userAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (data) => ({
        url: `/users/add`,
        method: "POST",
        body: data,
      }),
    }),
    getAllUsers: builder.query({
      query: () => "/users/list",
    }),
    // transformFromResponse: (responseData) => {
    //   return userAdapter.setAll(initialState, responseData);
    // },
  }),
});
export const { useAddUserMutation, useGetAllUsersQuery } = extendedApiSlice;
