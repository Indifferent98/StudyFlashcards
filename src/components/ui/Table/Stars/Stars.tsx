import { useState } from 'react'
import { ReactSVG } from 'react-svg'

import star from '@/img/Star.svg'

import s from './Stars.module.scss'
export const Stars = () => {
  const [grade, setGrade] = useState(0)

  return (
    <div className={s.wrapper}>
      <ReactSVG
        className={`${s.star} ${grade >= 1 && s.activeStar}`}
        onClick={() => {
          setGrade(1)
        }}
        src={star}
      />
      <ReactSVG
        className={`${s.star} ${grade >= 2 && s.activeStar}`}
        onClick={() => {
          setGrade(2)
        }}
        src={star}
      />
      <ReactSVG
        className={`${s.star} ${grade >= 3 && s.activeStar}`}
        onClick={() => {
          setGrade(3)
        }}
        src={star}
      />
      <ReactSVG
        className={`${s.star} ${grade >= 4 && s.activeStar}`}
        onClick={() => {
          setGrade(4)
        }}
        src={star}
      />
      <ReactSVG
        className={`${s.star} ${grade >= 5 && s.activeStar}`}
        onClick={() => {
          setGrade(5)
        }}
        src={star}
      />
    </div>
  )
}
