import {
  CreateDeckResponse,
  createDeckArgs,
  getDeckArgs,
  getDecksResponse,
  removeResponse,
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
    removeDeckById: builder.mutation<removeResponse, { id: string }>({
      query: args => ({ url: `v2/decks/${args.id}` }),
    }),
  }),
})

export const { useCreateDeckMutation, useGetDeckByIdQuery, useGetDecksQuery } = deckService
