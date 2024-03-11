import picture from '@/img/tablePicture.png'

import s from './TableItem.module.scss'

import { Stars } from '../Stars'

type Props = {
  answer?: number | string
  cardsCount: number | string
  changeSetting?: boolean
  createdBy: string
  emptySlot?: boolean
  grade?: string
  isHeader?: boolean
  lastUpdated: string
  name?: string
  question?: string
  withImg?: boolean
}

export const TableItem = ({
  answer,
  cardsCount,
  changeSetting = false,
  createdBy,
  emptySlot = false,
  grade,
  isHeader = false,
  lastUpdated,
  name,
  question,
  withImg = false,
}: Props) => {
  return (
    <div className={`${s.wrapper} ${isHeader && s.header}`}>
      {question && (
        <div className={`${s.question} ${s.item}`}>
          {withImg ? (
            <img className={`${s.img} ${s.item}`} src={picture} />
          ) : (
            <div className={s.text}>{question}</div>
          )}
        </div>
      )}

      {name && (
        <div className={`${s.name} ${s.item}`}>
          {withImg ? (
            <img className={`${s.img} ${s.item}`} src={picture} />
          ) : (
            <div className={s.text}>{name}</div>
          )}
        </div>
      )}

      {answer && <div className={`${s.answer} ${s.item}`}>{answer}</div>}

      {(cardsCount || cardsCount === 0) && (
        <div className={`${s.answer} ${s.item}`}>{cardsCount}</div>
      )}
      <div className={`${s.lastUpdated} ${s.item}`}>{lastUpdated}</div>
      {!createdBy && (
        <div className={`${s.grade} ${s.item}`}>{grade && isHeader ? grade : <Stars />}</div>
      )}
      {createdBy && <div className={`${s.grade} ${s.item}`}>{createdBy}</div>}

      {changeSetting && <div className={`${s.settings} ${s.item}`}>settings</div>}
      {emptySlot && <div className={`${s.settings} ${s.item}`}></div>}
    </div>
  )
}
