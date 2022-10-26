import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';
import {
  PeachoneResponse,
  Welcome,
  AuthResponse,
  AuthRequest,
  ConnectionTestToken,
} from './types';

export const peachoneApi = createApi({
  reducerPath: 'peachoneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.teraphone.app/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPublic: builder.query<PeachoneResponse<Welcome>, void>({
      query: () => '/public',
    }),
    getPrivate: builder.query<PeachoneResponse<Welcome>, void>({
      query: () => '/private',
    }),
    getConnectionTestToken: builder.query<
      PeachoneResponse<ConnectionTestToken>,
      void
    >({
      query: () => '/public/connection-test-token',
    }),
    auth: builder.mutation<PeachoneResponse<AuthResponse>, AuthRequest>({
      query: (body) => ({
        url: '/public/auth',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetPublicQuery,
  useGetPrivateQuery,
  useGetConnectionTestTokenQuery,
  useAuthMutation,
} = peachoneApi;
