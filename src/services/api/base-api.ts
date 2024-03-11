import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getDeckArgs, getDecksResponse } from '../flashcards.types'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => ({
    getDeckById: builder.query<getDecksResponse, { id: string }>({
      query: ({ id }) => ({ url: `v1/decks/${id}` }),
    }),
    getDecks: builder.query<getDecksResponse, getDeckArgs | void>({
      query: (args: getDeckArgs) => ({ params: args ?? {}, url: `v2/decks` }),
    }),
  }),
  reducerPath: 'baseApi',
  refetchOnFocus: true,
})

export const { useGetDeckByIdQuery, useGetDecksQuery } = baseApi
