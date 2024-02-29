import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './api/base-api'
import { setupListeners } from '@reduxjs/toolkit/query/react'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
