import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type filters = {
  maxCardsCount: number
  minCardsCount: number
  tabsState: 'allCards' | 'myCards'
}

const slice = createSlice({
  initialState: {
    maxCardsCount: 100,
    minCardsCount: 0,
    tabsState: 'allCards',
  } as filters,
  name: 'filters',
  reducers: {
    changeMaxCardsCount(state, action: PayloadAction<{ maxCard: number }>) {
      state.maxCardsCount = action.payload.maxCard
    },
    changeMinCardsCount(state, action: PayloadAction<{ minCard: number }>) {
      state.minCardsCount = action.payload.minCard
    },
    changeTabs(state, action: PayloadAction<{ tab: 'allCards' | 'myCards' }>) {
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
