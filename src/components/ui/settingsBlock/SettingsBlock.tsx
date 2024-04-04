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
  isOwner: boolean
  cardId?: string
}

export const SettingsBlock = ({ deckId, isOwner, settingVariant, cardId }: Props) => {
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode, changeCurrentModal, changeCurrentCardId } = appAction

  const { changeRemoveDeckModalId } = appAction

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
          <button
            className={`${s.item} ${s.button}`}
            onClick={() => {
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
            }}
          >
            <ReactSVG className={s.item} src={editIcon} />
          </button>
          <button
            className={`${s.item} ${s.button}`}
            onClick={() => {
              dispatch(changeBackGroundDarkMode({ mode: true }))
              dispatch(changeCurrentModal({ variant: 'Delete Deck' }))
              dispatch(changeRemoveDeckModalId({ id: deckId }))
            }}
          >
            <ReactSVG className={s.item} src={trashIcon} />
          </button>
        </>
      )}
    </div>
  )
}
