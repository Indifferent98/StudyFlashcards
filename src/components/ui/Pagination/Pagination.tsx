import { ReactSVG } from 'react-svg'

import leftArrowIcon from '@/img/leftArrow.svg'
import rightArrowIcon from '@/img/rightArrow.svg'

import s from './Pagination.module.scss'
import { Select } from '../Select'

type Props = {
  itemCount: number
}
export const Pagination = ({ itemCount }: Props) => {
  return (
    <div className={s.wrapper}>
      <ReactSVG className={s.svg} src={leftArrowIcon} />
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
