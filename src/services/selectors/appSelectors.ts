import { RootState } from '../store'

export const selectBackGroundDarkMode = (state: RootState) => state.appSlice.backgroundDarkMode
export const selectCurrentModal = (state: RootState) => state.appSlice.currentModal
export const selectRemoveDeckModalId = (state: RootState) => state.appSlice.removeDeckModalId
export const selectCurrentCardId = (state: RootState) => state.appSlice.currentCardId
