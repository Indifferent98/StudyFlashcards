import { useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { SuperSlider } from '@/components/ui/Slider'
import { TabSwitcher } from '@/components/ui/TabSwitcher'
import trashIcon from '@/img/trashIcon.svg'
import { useAppDispatch } from '@/services/hooks'
import { selectMaxCards, selectMinCards } from '@/services/selectors'
import { paginationAction } from '@/services/slices/PaginationSlice'
import { filtersAction } from '@/services/slices/filterSlice'
import s from '../decks.module.scss'

export const DecksNavigate = () => {
  const { resetPagination } = paginationAction
  const minCards = useSelector(selectMinCards)
  const maxCards = useSelector(selectMaxCards)
  const dispatch = useAppDispatch()

  return (
    <div className={s.body}>
      <div className={s.item}>
        <Input placeholder={'Input search'} value={'searchTitle'} variant={'search'} />
      </div>
      <TabSwitcher />
      <div className={s.item}>
        <SuperSlider range={[minCards, maxCards]} />
      </div>

      <div className={s.item}>
        <Button
          onClick={() => {
            dispatch(filtersAction.clearFilter())
            dispatch(resetPagination())
          }}
          variant={'secondary'}
        >
          <ReactSVG src={trashIcon} style={{ display: 'inline-block' }} /> Clear Filter
        </Button>
      </div>
    </div>
  )
}
