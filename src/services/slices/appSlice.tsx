import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type App = {
  backgroundDarkMode: boolean
}

const slice = createSlice({
  initialState: {
    backgroundDarkMode: false,
  } as App,
  name: 'Pagination',
  reducers: {
    changeBackGroundDarkMode(state, action: PayloadAction<{ mode: boolean }>) {
      state.backgroundDarkMode = action.payload.mode
    },
  },
})

export const appAction = slice.actions
export const appSlice = slice.reducer
