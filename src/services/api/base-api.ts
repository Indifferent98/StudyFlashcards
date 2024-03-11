import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  CreateDeckResponse,
  createDeckArgs,
  getDeckArgs,
  getDecksResponse,
} from '../flashcards.types'

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
    createDeck: builder.mutation<CreateDeckResponse, createDeckArgs>({
      query: args => ({ method: 'POST', url: `v1/decks`, body: args }),
    }),
  }),
  reducerPath: 'baseApi',
  refetchOnFocus: true,
})

export const { useGetDeckByIdQuery, useGetDecksQuery, useCreateDeckMutation } = baseApi
