import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PeachoneResponse, Welcome, AuthUserInfo, AuthRequest } from './types'

export const peachoneApi = createApi({
    reducerPath: 'peachoneApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.teraphone.app/v1'}),
    endpoints: (builder) => ({
        getPublic: builder.query<PeachoneResponse<Welcome>, void>({
            query: () => '/public',
        }),
        auth: builder.mutation<PeachoneResponse<AuthUserInfo>, AuthRequest>({
            query: (body) => ({
                url: '/public/auth',
                method: 'POST',
                body,
            }),
            transformResponse: (response: { data: PeachoneResponse<AuthUserInfo> }) => response.data,
        }),

    }),
})

export const { useGetPublicQuery, useAuthMutation } = peachoneApi