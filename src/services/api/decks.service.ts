import {
  DeckResponse,
  cardResponseItem,
  cardsByIdResponse,
  createCardArgs,
  createCardResponse,
  createDeckArgs,
  getCardsByIdArgs,
  getDeckArgs,
  getDeckByIdResponse,
  getDecksResponse,
  removeResponse,
  saveGradeArgs,
} from '../flashcards.types'
import { baseApi } from './base-api'

const deckService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<createCardResponse, createCardArgs>({
      invalidatesTags: ['Cards'],
      query: args => {
        const requestBody: Partial<createCardArgs> = { ...args }

        delete requestBody.id

        return { body: requestBody, method: 'POST', url: `v1/decks/${args.id}/cards` }
      },
    }),
    createDeck: builder.mutation<DeckResponse, createDeckArgs>({
      invalidatesTags: ['Decks'],
      query: args => ({ body: args, method: 'POST', url: `v1/decks` }),
    }),
    getCardsById: builder.query<cardsByIdResponse, getCardsByIdArgs>({
      providesTags: ['Cards'],
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
    changeDeckById: builder.mutation<DeckResponse, Partial<createDeckArgs> & { id: string }>({
      invalidatesTags: ['Decks'],
      query: ({ id, cover, isPrivate, name }) => ({
        method: 'PATCH',
        url: `v1/decks/${id}`,
        body: { cover, isPrivate, name },
      }),
    }),
    getRandomCard: builder.query<cardResponseItem, { id: string; previousCardId?: string }>({
      query: ({ id, previousCardId }) => ({
        params: { previousCardId },
        url: `v1/decks/${id}/learn`,
      }),
    }),
    saveCardGrade: builder.mutation<cardResponseItem, saveGradeArgs>({
      invalidatesTags: ['Decks'],
      query: args => {
        const bodyParams: Partial<saveGradeArgs> = { ...args }
        delete bodyParams.deckId
        return { method: 'POST', url: `v1/decks/${args.deckId}/learn`, body: bodyParams }
      },
    }),
  }),
})

export const {
  useCreateCardMutation,
  useCreateDeckMutation,
  useGetCardsByIdQuery,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useRemoveDeckByIdMutation,
  useChangeDeckByIdMutation,
  useGetRandomCardQuery,
  useSaveCardGradeMutation,
} = deckService
