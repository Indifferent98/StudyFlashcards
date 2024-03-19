import { Link, Navigate } from 'react-router-dom'

import picture from '@/img/tablePicture.png'

import s from './TableItem.module.scss'

import { Stars } from '../Stars'
import { filtersAction } from '@/services/slices/filterSlice'
import { useAppDispatch } from '@/services/hooks'
import { orderBy } from '@/services/flashcards.types'
import { useSelector } from 'react-redux'
import { selectOrderBy } from '@/services/selectors'
import { ReactSVG } from 'react-svg'
import arrowUp from '@/img/arrowUpIcon.svg'
import arrowDown from '@/img/arrowDown.svg'
import { SettingsBlock } from '../../settingsBlock'

type Props = {
  answer?: number | string
  authorId?: string
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
  authorId,
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
  const { changeOrderByValue } = filtersAction
  const dispatch = useAppDispatch()

  const changeOrderByHandler = (orderBy: orderBy) => {
    dispatch(changeOrderByValue({ orderBy }))
  }
  const orderBy = useSelector(selectOrderBy)

  const ArrowUp = (
    <ReactSVG
      src={arrowUp}
      style={{ display: 'inline-block', marginLeft: '4px', position: 'relative', top: '-2px' }}
    />
  )
  const ArrowDown = (
    <ReactSVG
      src={arrowDown}
      style={{ display: 'inline-block', marginLeft: '4px', position: 'relative', top: '-2px' }}
    />
  )

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

      {(name || createdBy) && (
        <div
          className={`${s.name} ${s.item} ${s.headerButton}`}
          onClick={() => {
            changeOrderByHandler(orderBy === 'name-asc' ? 'name-desc' : 'name-asc')
          }}
        >
          {withImg ? (
            <img className={`${s.img} ${s.item}`} src={picture} />
          ) : (
            <div className={s.text}>
              {name}
              {isHeader && orderBy === 'name-asc'
                ? ArrowUp
                : isHeader && orderBy === 'name-desc'
                ? ArrowDown
                : ''}
            </div>
          )}
        </div>
      )}

      {answer && <div className={`${s.answer} ${s.item}`}>{answer}</div>}

      {(cardsCount || cardsCount === 0) && (
        <div
          className={`${s.cards} ${s.item} ${s.headerButton}`}
          onClick={() => {
            changeOrderByHandler(
              orderBy === 'cardsCount-asc' ? 'cardsCount-desc' : 'cardsCount-asc'
            )
          }}
        >
          {cardsCount}
          {isHeader && orderBy === 'cardsCount-asc'
            ? ArrowUp
            : isHeader && orderBy === 'cardsCount-desc'
            ? ArrowDown
            : ''}
        </div>
      )}
      <div
        className={`${s.lastUpdated} ${s.item} ${s.headerButton}`}
        onClick={() => {
          changeOrderByHandler(orderBy === 'updated-asc' ? 'updated-desc' : 'updated-asc')
        }}
      >
        {lastUpdated}
        {isHeader && orderBy === 'updated-asc'
          ? ArrowUp
          : isHeader && orderBy === 'updated-desc'
          ? ArrowDown
          : ''}
      </div>
      {!createdBy && (
        <div className={`${s.grade} ${s.item}`}>{grade && isHeader ? grade : <Stars />}</div>
      )}
      {createdBy && (
        <Link className={`${s.createdBy} ${s.item}`} to={`${authorId}`}>
          {createdBy}
        </Link>
      )}

      {changeSetting && (
        <div className={`${s.settings} ${s.item}`}>{<SettingsBlock isOwner={true} />}</div>
      )}
      {emptySlot && <div className={`${s.settings} ${s.item}`}></div>}
    </div>
  )
}
