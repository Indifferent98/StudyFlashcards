import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type filters = {
  minCardsCount: number
  maxCardsCount: number
}

const slice = createSlice({
  initialState: {
    minCardsCount: 1,
    maxCardsCount: 100,
  } as filters,
  name: 'filters',
  reducers: {
    changeMinCardsCount(state, action: PayloadAction<{ minCard: number }>) {
      state.minCardsCount = action.payload.minCard
    },
    changeMaxCardsCount(state, action: PayloadAction<{ maxCard: number }>) {
      state.maxCardsCount = action.payload.maxCard
    },
    clearFilter(state) {
      state.maxCardsCount = 100
      state.minCardsCount = 1
    },
  },
})

export const filtersAction = slice.actions
export const filtersSlice = slice.reducer
