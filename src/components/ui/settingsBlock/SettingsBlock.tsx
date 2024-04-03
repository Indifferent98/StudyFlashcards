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
  isOwner: boolean
}

export const SettingsBlock = ({ deckId, isOwner }: Props) => {
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode, changeCurrentModal } = appAction

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
              dispatch(changeCurrentModal({ variant: 'Change Deck' }))
              dispatch(changeRemoveDeckModalId({ id: deckId }))
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
