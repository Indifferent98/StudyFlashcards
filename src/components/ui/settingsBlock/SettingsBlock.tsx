import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import editIcon from '@/img/editIcon.svg'
import playIcon from '@/img/playCircleIcon.svg'
import trashIcon from '@/img/trashIcon.svg'
import { useAppDispatch } from '@/services/hooks'
import { appAction } from '@/services/slices/appSlice'
import s from './Settings.module.scss'

type Props = {
  deckId: string
  settingVariant: 'changeDeck' | 'changeCard'
  removeVariant: 'deck' | 'card'
  isOwner: boolean
  cardId?: string
}

export const SettingsBlock = ({
  deckId,
  isOwner,
  settingVariant,
  cardId,
  removeVariant,
}: Props) => {
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode, changeCurrentModal, changeCurrentCardId } = appAction
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
