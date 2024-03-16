import React, { ChangeEvent, useState } from 'react'

import { useAppDispatch } from '@/services/hooks'
import { filtersAction } from '@/services/slices/filterSlice'

import s from '../Slider/Slider.module.scss'
import f from './editableSpan.module.scss'

import { Typography } from '../Typography'

type Props = {
  type: 'max' | 'min'
  value: number
}

export const EditableSpan = React.memo(({ type, value }: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(value)
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
      autoFocus
      className={`${s.valueBox} ${f.boxInput}`}
      onBlur={activateViewMode}
      onChange={changeTitle}
      value={title}
    />
  ) : (
    <Typography
      children={value}
      className={s.valueBox}
      onDoubleClick={activateEditMode}
      variant={'Body1'}
    />
  )
})
