import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';
import {
  PeachoneResponse,
  Welcome,
  AuthResponse,
  AuthRequest,
  ConnectionTestToken,
  ResolveRequest,
  ResolveResponse,
  ActivateRequest,
  ActivateResponse,
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
    resolve: builder.mutation<
      PeachoneResponse<ResolveResponse>,
      ResolveRequest
    >({
      query: (body) => ({
        url: '/subscriptions/resolve',
        method: 'POST',
        body,
        responseHandler: async (response) => {
          // `response` is from the from Fetch API: https://mdn.io/response
          try {
            return await response.clone().json();
          } catch (error) {
            return { detail: await response.text() };
          }
        },
      }),
    }),
    activate: builder.mutation<
      PeachoneResponse<ActivateResponse>,
      ActivateRequest
    >({
      query: (body) => ({
        url: '/subscriptions/activate',
        method: 'POST',
        body,
        // TODO: Check if this can be async or if response.body.asJSON() needs
        // to be used: https://jakearchibald.com/2014/reading-responses/
        responseHandler: async (response) => {
          // `response` is from the from Fetch API: https://mdn.io/response
          try {
            return await response.clone().json();
          } catch (error) {
            return { detail: await response.text() };
          }
        },
      }),
    }),
    // TODO: Add GET /subscriptions
    // - Returns map of maps of Subscription objects where the keys are tenant IDs, then subscription ID
    // TODO: Add GET /subscriptions/:tid/users
    // - Returns array of TenantUser objects
    // TODO: Add PATCH /subscriptions/:tid/users/:oid
    // - { subscriptionId: 'sid' } // assign
    // - { subscriptionId: '' } // unassign
    // - Returns updated user: TenantUser object
  }),
});

export const {
  useGetPublicQuery,
  useGetPrivateQuery,
  useGetConnectionTestTokenQuery,
  useAuthMutation,
  useResolveMutation,
  useActivateMutation,
} = peachoneApi;
