import {
  CreateDeckResponse,
  cardsByIdResponse,
  createDeckArgs,
  getCardsByIdArgs,
  getDeckArgs,
  getDeckByIdResponse,
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
    getCardsById: builder.query<cardsByIdResponse, getCardsByIdArgs>({
      query: (args: getCardsByIdArgs) => {
        const queryParams: Partial<getCardsByIdArgs> = { ...args }

        delete queryParams.id

        return { params: queryParams ?? {}, url: `v1/decks/${args.id}/cards` }
      },
    }),
    getDeckById: builder.query<getDeckByIdResponse, { id: string }>({
      query: ({ id }) => ({ url: `v1/decks/${id}` }),
    }),
    getDecks: builder.query<getDecksResponse, getDeckArgs | void>({
      providesTags: ['Decks'],
      query: (args: getDeckArgs) => ({ params: args ?? {}, url: `v2/decks` }),
    }),
    removeDeckById: builder.mutation<removeResponse, { id: string }>({
      invalidatesTags: ['Decks'],
      query: args => ({ method: 'DELETE', url: `v1/decks/${args.id}` }),
    }),
  }),
})

export const {
  useCreateDeckMutation,
  useGetCardsByIdQuery,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useRemoveDeckByIdMutation,
} = deckService
