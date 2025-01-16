// authApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn } from '../authSlice';

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/user",
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (inputData) => ({
        url: "/register",
        method: 'POST',
        body: inputData,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result?.data?.user }));
        } catch (error) {
          console.log(error.message);
        }
      }
    }),
    login: builder.mutation({
      query: (inputData) => ({
        url: "/login",
        method: 'POST',
        body: inputData,
      }),
      async onQueryStarted(_, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn({ user: result?.data?.user }));
        } catch (error) {
          console.log(error.message);
        }
      }
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;