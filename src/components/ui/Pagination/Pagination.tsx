import { ReactSVG } from 'react-svg'

import leftArrowIcon from '@/img/leftArrow.svg'
import rightArrowIcon from '@/img/rightArrow.svg'

import s from './Pagination.module.scss'
import { Select } from '../Select'
import { useState } from 'react'

type Props = {
  totalItems: number
}
export const Pagination = ({ totalItems }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(100)

  let pagesCount = Math.ceil(totalItems / pageSize)
  let mappedPages = []
  // debugger
  let i = 1
  while (i <= pagesCount) {
    mappedPages.push(i)
    i++
  }
  mappedPages = mappedPages.map((elem, i) => (
    <button
      onClick={() => {
        setCurrentPage(i)
      }}
      className={`${s.pageButton} ${i + 1 === currentPage && s.currentPage} ${
        !(i + 1 === currentPage) && s.hoveredButton
      }`}
    >
      <div>{++i}</div>
    </button>
  ))

  const leftArrowHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const rightArrowHandler = () => {
    if (currentPage !== mappedPages.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  let filteredMappedPages: any = []
  const ellipsisDiv = <div style={{ width: '24px', height: '24px', marginLeft: '12px' }}>...</div>
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
      <div className={s.pageButtons}>
        <ReactSVG onClick={leftArrowHandler} className={s.svg} src={leftArrowIcon} />
        {filteredMappedPages}
        <ReactSVG
          onClick={rightArrowHandler}
          className={`${s.svg} ${s.rightArrow}`}
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
          setChooseItem={setPageSize}
        />
        на странице
      </div>
    </div>
  )
}
