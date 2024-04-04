import { cardsUpdateResponse, createCardArgs } from '../flashcards.types'
import { baseApi } from './base-api'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    updateCard: builder.mutation<cardsUpdateResponse, createCardArgs>({
      invalidatesTags: ['Cards'],
      query: args => {
        const requestBody: Partial<createCardArgs> = { ...args }
        delete requestBody.id
        return { body: requestBody, method: 'PATCH', url: `v1/cards/${args.id}` }
      },
    }),
  }),
})

export const { useUpdateCardMutation } = cardsService
