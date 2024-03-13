import { RootState } from '../store'

export const selectMaxCards = (state: RootState) => state.filtersSlice.maxCardsCount
export const selectMinCards = (state: RootState) => state.filtersSlice.minCardsCount
export const selectTabs = (state: RootState) => state.filtersSlice.tabsState
