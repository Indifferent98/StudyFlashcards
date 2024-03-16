import {
  CreateDeckResponse,
  createDeckArgs,
  getDeckArgs,
  getDecksResponse,
} from '../flashcards.types'
import { baseApi } from './base-api'

const deckService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createDeck: builder.mutation<CreateDeckResponse, createDeckArgs>({
      invalidatesTags: ['Decks'],
      query: args => ({ body: args, method: 'POST', url: `v1/decks` }),
    }),
    getDeckById: builder.query<getDecksResponse, { id: string }>({
      query: ({ id }) => ({ url: `v1/decks/${id}` }),
    }),
    getDecks: builder.query<getDecksResponse, getDeckArgs | void>({
      providesTags: ['Decks'],
      query: (args: getDeckArgs) => ({ params: args ?? {}, url: `v2/decks` }),
    }),
  }),
})

export const { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } = deckService
