import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getDecksResponse } from '../flashcards.types'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<getDecksResponse, void>({
        query: () => `v2/decks`,
      }),
    }
  },
  reducerPath: 'baseApi',
  refetchOnFocus: true,
})

export const { useGetDecksQuery } = baseApi
