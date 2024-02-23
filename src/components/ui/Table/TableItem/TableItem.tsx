import picture from '@/img/tablePicture.png'

import s from './TableItem.module.scss'

import { Stars } from '../Stars'

type Props = {
  answer?: string
  grade?: string
  lastUpdated: string
  question?: string
  withImg: boolean
}

export const TableItem = ({ answer, grade, lastUpdated, question, withImg = false }: Props) => {
  return (
    <div className={`${s.wrapper} ${grade && s.header}`}>
      <div className={`${s.question} ${s.item}`}>
        {withImg ? (
          <img className={`${s.img} ${s.item}`} src={picture} />
        ) : (
          <div className={s.text}>{question}</div>
        )}
      </div>
      <div className={`${s.answer} ${s.item}`}>{answer}</div>
      <div className={`${s.lastUpdated} ${s.item}`}>{lastUpdated}</div>
      <div className={`${s.grade} ${s.item}`}>{grade ? grade : <Stars />}</div>
    </div>
  )
}
