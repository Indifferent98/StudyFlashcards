import { RootState } from '../store'

export const selectBackGroundDarkMode = (state: RootState) => state.appSlice.backgroundDarkMode
