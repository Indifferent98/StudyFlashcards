import { useState } from 'react'
import { ReactSVG } from 'react-svg'

import star from '@/img/Star.svg'

import s from './Stars.module.scss'
type Props = {
  grade: number
}
export const Stars = ({ grade }: Props) => {
  return (
    <div className={s.wrapper}>
      <ReactSVG className={`${s.star} ${grade >= 1 && s.activeStar}`} src={star} />
      <ReactSVG className={`${s.star} ${grade >= 2 && s.activeStar}`} src={star} />
      <ReactSVG className={`${s.star} ${grade >= 3 && s.activeStar}`} src={star} />
      <ReactSVG className={`${s.star} ${grade >= 4 && s.activeStar}`} src={star} />
      <ReactSVG className={`${s.star} ${grade >= 5 && s.activeStar}`} src={star} />
    </div>
  )
}
