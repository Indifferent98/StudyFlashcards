import { Stars } from '../Stars'
import s from './TableItem.module.scss'
import picture from '@/img/tablePicture.png'

type Props = {
  withImg: boolean
  question?: string
  answer?: string
  lastUpdated: string
  grade?: string
}

export const TableItem = ({ withImg = false, question, answer, lastUpdated, grade }: Props) => {
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
