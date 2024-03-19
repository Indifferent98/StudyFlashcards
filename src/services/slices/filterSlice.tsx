import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { orderBy } from '../flashcards.types'

type filters = {
  maxCardsCount: number
  minCardsCount: number
  sliderValue: number[]
  tabsState: 'allCards' | 'myCards'
  searchValue: string
  orderBy: orderBy
}

const slice = createSlice({
  initialState: {
    maxCardsCount: 100,
    minCardsCount: 0,
    sliderValue: [0, 100],
    tabsState: 'allCards',
    searchValue: '',
    orderBy: null,
  } as filters,
  name: 'filters',
  reducers: {
    changeMaxCardsCount(state, action: PayloadAction<{ maxCard: number }>) {
      state.maxCardsCount = action.payload.maxCard
    },
    changeMinCardsCount(state, action: PayloadAction<{ minCard: number }>) {
      state.minCardsCount = action.payload.minCard
    },
    changeSliderValue(state, action: PayloadAction<{ value: number[] }>) {
      state.sliderValue = action.payload.value
    },
    changeTabs(state, action: PayloadAction<{ tab: 'allCards' | 'myCards' }>) {
      state.tabsState = action.payload.tab
    },
    changeSearchValue(state, action: PayloadAction<{ value: string }>) {
      state.searchValue = action.payload.value
    },
    changeOrderByValue(state, action: PayloadAction<{ orderBy: orderBy }>) {
      state.orderBy = action.payload.orderBy
    },
    clearFilter(state) {
      state.maxCardsCount = 100
      state.minCardsCount = 0
      state.tabsState = 'allCards'
      state.sliderValue = [0, 100]
      state.searchValue = ''
    },
  },
})

export const filtersAction = slice.actions
export const filtersSlice = slice.reducer
