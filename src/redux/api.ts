import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  PeachoneResponse,
  Welcome,
  AuthUserInfo,
  AuthRequest,
  ConnectionTestToken,
} from './types';

export const peachoneApi = createApi({
  reducerPath: 'peachoneApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.teraphone.app/v1' }),
  endpoints: (builder) => ({
    getPublic: builder.query<PeachoneResponse<Welcome>, void>({
      query: () => '/public',
    }),
    getConnectionTestToken: builder.query<
      PeachoneResponse<ConnectionTestToken>,
      void
    >({
      query: () => '/public/connection-test-token',
    }),
    auth: builder.mutation<PeachoneResponse<AuthUserInfo>, AuthRequest>({
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
  useGetConnectionTestTokenQuery,
  useAuthMutation,
} = peachoneApi;
