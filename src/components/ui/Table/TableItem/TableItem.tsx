import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import { hideOverflowText } from '@/common/utils'
import arrowDown from '@/img/arrowDown.svg'
import arrowUp from '@/img/arrowUpIcon.svg'
import picture from '@/img/tablePicture.png'
import { orderBy } from '@/services/flashcards.types'
import { useAppDispatch } from '@/services/hooks'
import { selectOrderBy } from '@/services/selectors'
import { paginationAction } from '@/services/slices/PaginationSlice'
import { filtersAction } from '@/services/slices/filterSlice'

import s from './TableItem.module.scss'

import { SettingsBlock } from '../../settingsBlock'
import { Stars } from '../Stars'

type Props = {
  answer?: number | string
  answerImg?: string
  authorId?: string
  cardId?: string
  cardsCount?: number | string
  changeSetting?: boolean
  createdBy?: string
  deckId?: string
  emptySlot?: boolean
  grade?: string
  gradeMark?: number
  isHeader?: boolean
  lastUpdated: string
  name?: string
  question?: string
  questionImg?: string
  removeVariant?: 'card' | 'deck'
  settingVariant?: 'changeCard' | 'changeDeck'
  withImg?: boolean
}

export const TableItem = ({
  answer,
  answerImg,
  authorId,
  cardId,
  cardsCount,
  changeSetting = false,
  createdBy = '',
  deckId = '',
  emptySlot = false,
  grade,
  gradeMark = 1,
  isHeader = false,
  lastUpdated,
  name,
  question,
  questionImg,
  removeVariant,
  settingVariant = 'changeDeck',
  withImg = false,
}: Props) => {
  const { changeOrderByValue, clearFilter } = filtersAction
  const dispatch = useAppDispatch()
  const changeOrderByHandler = (orderBy: orderBy) => {
    dispatch(changeOrderByValue({ orderBy }))
  }
  const orderBy = useSelector(selectOrderBy)

  const { resetPagination } = paginationAction

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
          {
            <>
              {questionImg && (
                <img
                  className={`${s.img} ${s.item}`}
                  src={questionImg}
                  style={{ height: '150px', width: '230px' }}
                />
              )}
              <div className={s.text}>{hideOverflowText(question)}</div>
            </>
          }
        </div>
      )}

      {(name || createdBy) && isHeader && (
        <div
          className={`${s.name} ${isHeader ? false : s.deckName} ${s.item} ${s.headerButton}`}
          onClick={() => {
            isHeader && changeOrderByHandler(orderBy === 'name-asc' ? 'name-desc' : 'name-asc')
          }}
        >
          {withImg ? (
            <div className={s.imgWrapper}>
              <img
                className={`${s.img} ${s.item}`}
                src={picture}
                style={{ height: '150px', width: '230px' }}
              />
            </div>
          ) : (
            <div className={s.decksText}>
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

      {name && !isHeader && (
        <Link
          className={`${s.name} ${s.deckName} ${s.link} ${s.item} ${s.headerButton}`}
          onClick={() => {
            dispatch(clearFilter())
            dispatch(resetPagination())
          }}
          to={`cards/${deckId}`}
        >
          {
            <div style={{ float: 'left', height: '40px', width: 'maxContent' }}>
              {withImg && (
                <div className={s.imgWrapper}>
                  <img className={`${s.img} ${s.item}`} src={picture} />
                </div>
              )}

              <div className={s.decksText}> {name}</div>
            </div>
          }
        </Link>
      )}

      {answer && (
        <div className={`${s.answer} ${s.item}`}>
          {answerImg && (
            <div className={s.imgWrapper}>
              <img src={answerImg} style={{ height: '150px', width: '230px' }} />
            </div>
          )}
          <div className={s.text}> {hideOverflowText(String(answer))}</div>
        </div>
      )}

      {(cardsCount || cardsCount === 0) && (
        <div
          className={`${s.cards} ${s.item} ${s.headerButton}`}
          onClick={() => {
            isHeader &&
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
          isHeader &&
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
        <div className={`${s.grade} ${s.item}`}>
          {grade && isHeader ? grade : <Stars grade={gradeMark} />}
        </div>
      )}
      {createdBy && (
        <Link className={`${s.createdBy} ${s.item}`} to={`${authorId}`}>
          {createdBy}
        </Link>
      )}

      {changeSetting && (
        <div className={`${s.settings} ${s.item}`}>
          {
            <SettingsBlock
              cardId={cardId}
              deckId={deckId}
              isOwner={authorId === 'f2be95b9-4d07-4751-a775-bd612fc9553a'}
              removeVariant={removeVariant ? removeVariant : 'deck'}
              settingVariant={settingVariant}
            />
          }
        </div>
      )}
      {emptySlot && <div className={`${s.settings} ${s.item}`}></div>}
    </div>
  )
}
