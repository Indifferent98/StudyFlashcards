import { ReactSVG } from 'react-svg'
import s from './Pagination.module.scss'
import leftArrowIcon from '@/img/leftArrow.svg'
import rightArrowIcon from '@/img/rightArrow.svg'
import { Select } from '../Select'
export const Pagination = () => {
  return (
    <div className={s.wrapper}>
      <ReactSVG src={leftArrowIcon} className={s.svg} />
      <ReactSVG src={rightArrowIcon} className={s.svg} />
      <div className={s.rightSide}>
        Показать{' '}
        <Select
          width="max-content"
          isInlineBlock={true}
          selectName="100"
          selectedItems={['10', '20', '30', '50', '100']}
        />{' '}
        на странице
      </div>
    </div>
  )
}
