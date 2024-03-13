import React, { ChangeEvent, useState } from 'react'
import s from '../Slider/Slider.module.scss'
import { Typography } from '../Typography'
import f from './editableSpan.module.scss'
import { useAppDispatch } from '@/services/hooks'
import { filtersAction } from '@/services/slices/filterSlice'

type Props = {
  value: number
  type: 'min' | 'max'
}

export const EditableSpan = React.memo(({ value, type }: Props) => {
  let [editMode, setEditMode] = useState(false)
  let [title, setTitle] = useState(value)
  const dispatch = useAppDispatch()
  const { changeMaxCardsCount, changeMinCardsCount } = filtersAction
  const activateEditMode = () => {
    setEditMode(true)
    setTitle(value)
  }
  const activateViewMode = () => {
    setEditMode(false)
    if (type === 'max') {
      dispatch(changeMaxCardsCount({ maxCard: title }))
    } else {
      dispatch(changeMinCardsCount({ minCard: title }))
    }
  }
  // const [timerId, setTimerId] = useState<string | number | NodeJS.Timeout | undefined>()
  const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(+e.currentTarget.value)
    // clearTimeout(timerId)
    // setTimerId(
    //   setTimeout(() => {
    //   }, 2000)
    // )
  }

  return editMode ? (
    <input
      value={title}
      onChange={changeTitle}
      autoFocus
      onBlur={activateViewMode}
      className={`${s.valueBox} ${f.boxInput}`}
    />
  ) : (
    <Typography
      children={value}
      onDoubleClick={activateEditMode}
      className={s.valueBox}
      variant={'Body1'}
    />
  )
})
