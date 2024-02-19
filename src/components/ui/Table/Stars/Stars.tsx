import { ReactSVG } from 'react-svg'
import star from '@/img/Star.svg'
import s from './Stars.module.scss'
import { useState } from 'react'
export const Stars = () => {
  const [grade, setGrade] = useState(0)

  return (
    <div className={s.wrapper}>
      <ReactSVG
        src={star}
        className={`${s.star} ${grade >= 1 && s.activeStar}`}
        onClick={() => {
          setGrade(1)
        }}
      />
      <ReactSVG
        src={star}
        className={`${s.star} ${grade >= 2 && s.activeStar}`}
        onClick={() => {
          setGrade(2)
        }}
      />
      <ReactSVG
        src={star}
        className={`${s.star} ${grade >= 3 && s.activeStar}`}
        onClick={() => {
          setGrade(3)
        }}
      />
      <ReactSVG
        src={star}
        className={`${s.star} ${grade >= 4 && s.activeStar}`}
        onClick={() => {
          setGrade(4)
        }}
      />
      <ReactSVG
        src={star}
        className={`${s.star} ${grade >= 5 && s.activeStar}`}
        onClick={() => {
          setGrade(5)
        }}
      />
    </div>
  )
}
