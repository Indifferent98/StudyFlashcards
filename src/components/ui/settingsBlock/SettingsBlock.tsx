import { ReactSVG } from 'react-svg'

import editIcon from '@/img/editIcon.svg'
import playIcon from '@/img/playCircleIcon.svg'
import trashIcon from '@/img/trashIcon.svg'
import { useAppDispatch } from '@/services/hooks'
import { appAction } from '@/services/slices/appSlice'

import s from './Settings.module.scss'
import { Link } from 'react-router-dom'

type Props = {
  deckId: string
  isOwner: boolean
}

export const SettingsBlock = ({ deckId, isOwner }: Props) => {
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode, changeCurrentModal } = appAction

  console.log(deckId)
  const { changeRemoveDeckModalId } = appAction

  return (
    <div className={s.wrapper}>
      <Link
        to={`/cards/${deckId}`}
        style={{ padding: '0px 0px' }}
        className={`${s.item} ${s.button}`}
      >
        <ReactSVG src={playIcon} />
      </Link>
      {isOwner && (
        <>
          <button className={`${s.item} ${s.button}`}>
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
