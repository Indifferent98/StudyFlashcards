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
    getDecks: builder.query<getDecksResponse, getDeckArgs | void>({
      query: (args: getDeckArgs) => ({ url: `v2/decks`, params: args ?? {} }),
    }),
    getDeckById: builder.query<getDecksResponse, { id: string }>({
      query: ({ id }) => ({ url: `v1/decks/${id}` }),
    }),
  }),
  reducerPath: 'baseApi',
  refetchOnFocus: true,
})

export const { useGetDecksQuery, useGetDeckByIdQuery } = baseApi
