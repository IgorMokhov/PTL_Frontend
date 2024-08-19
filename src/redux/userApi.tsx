import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://31.128.42.224:8000' }),

  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (signupData) => ({
        url: '/auth/reg',
        method: 'POST',
        body: signupData,
      }),
    }),

    login: builder.mutation({
      query: (loginData) => ({
        url: '/auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = userApi;
