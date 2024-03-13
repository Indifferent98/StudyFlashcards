import { RootState } from '../store'

export const selectMaxCards = (state: RootState) => state.filtersSlice.maxCardsCount
export const selectMinCards = (state: RootState) => state.filtersSlice.minCardsCount
