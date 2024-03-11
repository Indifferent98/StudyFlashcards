import { useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'

import leftArrowIcon from '@/img/leftArrow.svg'
import rightArrowIcon from '@/img/rightArrow.svg'
import { useAppDispatch } from '@/services/hooks'
import { selectCurrentPage, selectPageSize } from '@/services/selectors/paginationSelectors'
import { paginationAction } from '@/services/slices/PaginationSlice'
import { v1 } from 'uuid'

import s from './Pagination.module.scss'

import { Select } from '../Select'

type Props = {
  totalItems: number
}
export const Pagination = ({ totalItems }: Props) => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)
  const dispatch = useAppDispatch()
  const { changeCurrentPage } = paginationAction

  const pagesCount = Math.ceil(totalItems / pageSize)
  let mappedPages = []
  let i = 1

  while (i <= pagesCount) {
    mappedPages.push(i)
    i++
  }
  mappedPages = mappedPages.map((elem, i) => (
    <button
      className={`${s.pageButton} ${i + 1 === currentPage && s.currentPage} ${
        !(i + 1 === currentPage) && s.hoveredButton
      }`}
      key={v1()}
      onClick={() => {
        dispatch(changeCurrentPage({ newPage: i }))
      }}
    >
      <div>{++i}</div>
    </button>
  ))

  const leftArrowHandler = () => {
    if (currentPage !== 1) {
      dispatch(changeCurrentPage({ newPage: currentPage - 1 }))
    }
  }
  const rightArrowHandler = () => {
    if (currentPage !== mappedPages.length) {
      dispatch(changeCurrentPage({ newPage: currentPage + 1 }))
    }
  }

  let filteredMappedPages: any = []
  const ellipsisDiv = <div style={{ height: '24px', marginLeft: '12px', width: '24px' }}>...</div>

  if (mappedPages.length <= 7) {
    filteredMappedPages = mappedPages
  }
  if (mappedPages.length > 7) {
    if (currentPage <= 3) {
      filteredMappedPages = [...mappedPages].splice(0, 5)
      filteredMappedPages.push(ellipsisDiv)
      filteredMappedPages.push(mappedPages[mappedPages.length - 1])
    } else if (currentPage >= 4 && currentPage >= mappedPages.length - 2) {
      filteredMappedPages = []
      filteredMappedPages.push(mappedPages[0])
      filteredMappedPages.push(ellipsisDiv)
      filteredMappedPages.push([...mappedPages].splice(mappedPages.length - 5, 5))
    } else if (currentPage >= 4) {
      filteredMappedPages = []
      filteredMappedPages.push(mappedPages[0])
      filteredMappedPages.push(ellipsisDiv)
      filteredMappedPages.push([...mappedPages].splice(currentPage - 2, 3))
      filteredMappedPages.push(ellipsisDiv)
      filteredMappedPages.push(mappedPages[mappedPages.length - 1])
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.pageButtons} key={v1()}>
        <ReactSVG className={s.svg} onClick={leftArrowHandler} src={leftArrowIcon} />
        {filteredMappedPages}
        <ReactSVG
          className={`${s.svg} ${s.rightArrow}`}
          onClick={rightArrowHandler}
          src={rightArrowIcon}
        />
      </div>

      <div className={s.rightSide}>
        Показать
        <Select
          isInlineBlock
          selectName={pageSize}
          selectedItems={['10', '20', '30', '50', '100']}
          size={'small'}
          style={{ margin: '0px 6px' }}
          width={'max-content'}
        />
        <span style={{ marginLeft: '10px' }}>на странице</span>
      </div>
    </div>
  )
}
