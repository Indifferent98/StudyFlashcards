import { useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { SuperSlider } from '@/components/ui/Slider'
import { TabSwitcher } from '@/components/ui/TabSwitcher'
import trashIcon from '@/img/trashIcon.svg'
import { useAppDispatch } from '@/services/hooks'
import { selectMaxCards, selectMinCards, selectSearchValue } from '@/services/selectors'
import { paginationAction } from '@/services/slices/PaginationSlice'
import { filtersAction } from '@/services/slices/filterSlice'
import s from '../decks.module.scss'
import { ChangeEvent, useEffect, useState } from 'react'

export const DecksNavigate = () => {
  const { resetPagination } = paginationAction
  const minCards = useSelector(selectMinCards)
  const maxCards = useSelector(selectMaxCards)
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [timerId, setTimerId] = useState<any>()
  const searchItem = useSelector(selectSearchValue)
  const { clearFilter, changeSearchValue } = filtersAction
  const changeSearchParams = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  useEffect(() => {
    if (searchItem === '') {
      setSearchValue('')
    }
  }, [searchItem])

  useEffect(() => {
    clearTimeout(timerId)
    setTimerId(
      setTimeout(() => {
        dispatch(changeSearchValue({ value: searchValue }))
      }, 800)
    )
  }, [searchValue])

  return (
    <div className={s.body}>
      <div className={s.item}>
        <Input
          placeholder={'Input search'}
          value={searchValue}
          onChange={changeSearchParams}
          variant={'search'}
        />
      </div>
      <TabSwitcher />
      <div className={s.item}>
        <SuperSlider range={[minCards, maxCards]} />
      </div>

      <div className={s.item}>
        <Button
          onClick={() => {
            dispatch(clearFilter())
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
