import {
  CreateDeckResponse,
  createDeckArgs,
  getDeckArgs,
  getDecksResponse,
} from '../flashcards.types'
import { baseApi } from './base-api'

const deckService = baseApi.injectEndpoints({
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

export const { useGetDeckByIdQuery, useGetDecksQuery, useCreateDeckMutation } = deckService
