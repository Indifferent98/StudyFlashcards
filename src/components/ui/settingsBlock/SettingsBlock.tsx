import { ReactSVG } from 'react-svg'

import editIcon from '@/img/editIcon.svg'
import playIcon from '@/img/playCircleIcon.svg'
import trashIcon from '@/img/trashIcon.svg'

import s from './Settings.module.scss'
import { useAppDispatch } from '@/services/hooks'
import { appAction } from '@/services/slices/appSlice'

type Props = {
  isOwner: boolean
  deckId: string
}

export const SettingsBlock = ({ isOwner, deckId }: Props) => {
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode, changeCurrentModal } = appAction
  console.log(deckId)
  const { changeRemoveDeckModalId } = appAction
  return (
    <div className={s.wrapper}>
      <button className={`${s.item} ${s.button}`}>
        <ReactSVG src={playIcon} />
      </button>
      {isOwner && (
        <>
          <button className={`${s.item} ${s.button}`}>
            <ReactSVG className={s.item} src={editIcon} />
          </button>
          <button
            className={`${s.item} ${s.button}`}
            onClick={() => {
              dispatch(changeBackGroundDarkMode({ mode: true }))
              dispatch(changeCurrentModal({ variant: 'DeleteCard' }))
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
