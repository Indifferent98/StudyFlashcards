import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type filters = {
  minCardsCount: number
  maxCardsCount: number
  tabsState: 'allCards' | 'myCards'
}

const slice = createSlice({
  initialState: {
    minCardsCount: 0,
    maxCardsCount: 100,
    tabsState: 'allCards',
  } as filters,
  name: 'filters',
  reducers: {
    changeMinCardsCount(state, action: PayloadAction<{ minCard: number }>) {
      state.minCardsCount = action.payload.minCard
    },
    changeMaxCardsCount(state, action: PayloadAction<{ maxCard: number }>) {
      state.maxCardsCount = action.payload.maxCard
    },
    changeTabs(state, action: PayloadAction<{ tab: 'myCards' | 'allCards' }>) {
      state.tabsState = action.payload.tab
    },

    clearFilter(state) {
      state.maxCardsCount = 100
      state.minCardsCount = 0
      state.tabsState = 'allCards'
    },
  },
})

export const filtersAction = slice.actions
export const filtersSlice = slice.reducer
