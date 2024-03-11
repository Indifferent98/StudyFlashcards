import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  CreateDeckResponse,
  createDeckArgs,
  getDeckArgs,
  getDecksResponse,
} from '../flashcards.types'

export const baseApi = createApi({
  reducerPath: 'cardsApi',
  // refetchOnFocus: true,
  tagTypes: ['Decks'],
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
      providesTags: ['Decks'],
    }),
    createDeck: builder.mutation<CreateDeckResponse, createDeckArgs>({
      query: args => ({ method: 'POST', url: `v1/decks`, body: args }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDeckByIdQuery, useGetDecksQuery, useCreateDeckMutation } = baseApi
