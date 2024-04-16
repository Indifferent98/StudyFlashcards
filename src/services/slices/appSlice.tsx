import { ModalVariant } from '@/components/ui/Modal/Modal'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type App = {
  backgroundDarkMode: boolean
  currentCardId: string
  currentModal: ModalVariant
  removeDeckModalId: string
}

const slice = createSlice({
  initialState: {
    backgroundDarkMode: false,
    currentCardId: '',
    currentModal: 'Add new card',
    lastQuestionId: '',
    removeDeckModalId: '',
  } as App,
  name: 'Pagination',
  reducers: {
    changeBackGroundDarkMode(state, action: PayloadAction<{ mode: boolean }>) {
      state.backgroundDarkMode = action.payload.mode
    },
    changeCurrentCardId(state, action: PayloadAction<{ id: string }>) {
      state.currentCardId = action.payload.id
    },
    changeCurrentModal(state, action: PayloadAction<{ variant: ModalVariant }>) {
      state.currentModal = action.payload.variant
    },
    changeRemoveDeckModalId(state, action: PayloadAction<{ id: string }>) {
      state.removeDeckModalId = action.payload.id
    },
  },
})

export const appAction = slice.actions
export const appSlice = slice.reducer
