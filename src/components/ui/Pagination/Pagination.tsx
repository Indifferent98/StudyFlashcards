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
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState(19)

  let pagesCount = Math.ceil(totalItems / pageSize)
  let mappedPages: JSX.Element[] = []
  // debugger
  let i = 1
  while (i <= pagesCount) {
    mappedPages.push(<button className={s.pageButton}>{i}</button>)
    i++
  }

  return (
    <div className={s.wrapper}>
      <ReactSVG className={s.svg} src={leftArrowIcon} />
      <div className={s.pageButtons}>{mappedPages}</div>
      <ReactSVG className={s.svg} src={rightArrowIcon} />
      <div className={s.rightSide}>
        Показать
        <Select
          isInlineBlock
          selectName={'100'}
          selectedItems={['10', '20', '30', '50', '100']}
          size={'small'}
          style={{ margin: '0px 6px' }}
        />
        на странице
      </div>
    </div>
  )
}
