import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import editIcon from '@/img/editIcon.svg'
import playIcon from '@/img/playCircleIcon.svg'
import trashIcon from '@/img/trashIcon.svg'
import { useAppDispatch } from '@/services/hooks'
import { appAction } from '@/services/slices/appSlice'

import s from './Settings.module.scss'

type Props = {
  cardId?: string
  deckId: string
  isOwner: boolean
  removeVariant: 'card' | 'deck'
  settingVariant: 'changeCard' | 'changeDeck'
}

export const SettingsBlock = ({
  cardId,
  deckId,
  isOwner,
  removeVariant,
  settingVariant,
}: Props) => {
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode, changeCurrentCardId, changeCurrentModal } = appAction
  const { changeRemoveDeckModalId } = appAction

  const removeButtonHandler = () => {
    dispatch(changeBackGroundDarkMode({ mode: true }))
    if (removeVariant === 'deck') {
      dispatch(changeCurrentModal({ variant: 'Delete Deck' }))
      dispatch(changeRemoveDeckModalId({ id: deckId }))
    } else if (removeVariant === 'card' && cardId) {
      dispatch(changeCurrentModal({ variant: 'Delete Card' }))
      dispatch(changeCurrentCardId({ id: cardId }))
    }
  }
  const settingsButtonHandler = () => {
    dispatch(changeBackGroundDarkMode({ mode: true }))
    dispatch(changeRemoveDeckModalId({ id: deckId }))
    if (settingVariant === 'changeDeck') {
      dispatch(changeCurrentModal({ variant: 'Change Deck' }))
    }
    if (settingVariant === 'changeCard') {
      if (cardId) {
        dispatch(changeCurrentCardId({ id: cardId }))
      }
      dispatch(changeCurrentModal({ variant: 'Change Card' }))
    }
  }

  return (
    <div className={s.wrapper}>
      <Link
        className={`${s.item} ${s.button}`}
        style={{ padding: '0px 0px' }}
        to={`/cards/${deckId}`}
      >
        <ReactSVG src={playIcon} />
      </Link>
      {isOwner && (
        <>
          <button className={`${s.item} ${s.button}`} onClick={settingsButtonHandler}>
            <ReactSVG className={s.item} src={editIcon} />
          </button>
          <button className={`${s.item} ${s.button}`} onClick={removeButtonHandler}>
            <ReactSVG className={s.item} src={trashIcon} />
          </button>
        </>
      )}
    </div>
  )
}
