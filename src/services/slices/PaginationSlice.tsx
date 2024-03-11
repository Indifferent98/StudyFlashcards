import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Pagination = {
  currentPage: number
  pageSize: number
}

const slice = createSlice({
  name: 'Pagination',
  initialState: {
    currentPage: 1,
    pageSize: 10,
  } as Pagination,
  reducers: {
    changeCurrentPage(state, action: PayloadAction<{ newPage: number }>) {
      state.currentPage = action.payload.newPage
    },
    changePageSize(state, action: PayloadAction<{ newPageSize: number }>) {
      state.currentPage = action.payload.newPageSize
    },
  },
})

export const paginationAction = slice.actions
