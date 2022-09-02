import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PeachoneResponse, Welcome } from './types'

export const peachoneApi = createApi({
    reducerPath: 'peachoneApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.teraphone.app/v1'}),
    endpoints: (builder) => ({
        getPublic: builder.query<PeachoneResponse<Welcome>, void>({
            query: () => '/public',
        }),
    }),
})

export const { useGetPublicQuery } = peachoneApi