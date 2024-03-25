import { baseApi } from './base-api'

const cardsService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createDeck: builder.query<any, any>({
      // invalidatesTags: ['Decks'],
      query: args => ({ body: args, method: 'POST', url: `v1/decks` }),
    }),
  }),
})

export const {} = cardsService
