import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseResponse, Login, LoginResponse, User } from '../types/user';
import { RootState } from './store';

export interface UpdatedPassword {
  confirm_password: string;
  new_password: string;
  old_password: string;
}

type Email = Omit<Login, 'password'>;

type PasswordResponse = BaseResponse | string;

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://31.128.42.224:8000',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    signup: builder.mutation<BaseResponse, User>({
      query: (signupData) => ({
        url: '/auth/register',
        method: 'POST',
        body: signupData,
      }),
    }),

    login: builder.mutation<LoginResponse, Login>({
      query: (loginData) => ({
        url: '/auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),

    resetPassword: builder.mutation<PasswordResponse, Email>({
      query: (email) => ({
        url: '/password/reset',
        method: 'POST',
        body: email,
      }),
    }),

    updateUser: builder.mutation<BaseResponse, User>({
      query: (newData) => ({
        url: '/user/update',
        method: 'PUT',
        body: newData,
      }),
    }),

    updatePassword: builder.mutation<PasswordResponse, UpdatedPassword>({
      query: (newPassword) => ({
        url: '/password/change',
        method: 'PATCH',
        body: newPassword,
      }),
    }),

    getUser: builder.query<User, void>({
      query: () => ({
        url: '/user/info',
        method: 'GET',
      }),
    }),

    verification: builder.mutation<BaseResponse, void>({
      query: () => ({
        url: '/user/verification',
        method: 'POST',
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
  useGetUserQuery,
  useVerificationMutation,
} = userApi;
