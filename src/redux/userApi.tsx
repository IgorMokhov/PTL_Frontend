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

    resetPassword: builder.mutation({
      query: (email) => ({
        url: '/password/reset',
        method: 'POST',
        body: email,
      }),
    }),

    updateUser: builder.mutation({
      query: (newData) => ({
        url: '/user',
        method: 'PUT',
        body: newData,
      }),
    }),

    updatePassword: builder.mutation({
      query: (newPassword) => ({
        url: '/password/change',
        method: 'PATCH',
        body: newPassword,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useResetPasswordMutation,
  useUpdateUserMutation,
  useUpdatePasswordMutation,
} = userApi;
