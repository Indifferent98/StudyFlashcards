import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from './api/base-api'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { paginationSlice } from './slices/PaginationSlice'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    paginationSlice,
  },
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store
