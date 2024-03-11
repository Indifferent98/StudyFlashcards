import { RootState } from '../../store'

export const selectCurrentPage = (state: RootState) => state.paginationSlice.currentPage
export const selectPageSize = (state: RootState) => state.paginationSlice.pageSize
