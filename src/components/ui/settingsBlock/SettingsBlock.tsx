import { ReactSVG } from 'react-svg'
import trashIcon from '@/img/trashIcon.svg'
import editIcon from '@/img/editIcon.svg'
import playIcon from '@/img/playCircleIcon.svg'
import s from './Settings.module.scss'
type Props = {
  isOwner: boolean
}

export const SettingsBlock = ({ isOwner }: Props) => {
  return (
    <div className={s.wrapper}>
      <button className={`${s.item} ${s.button}`}>
        <ReactSVG src={playIcon} />
      </button>

      <button className={`${s.item} ${s.button}`}>
        <ReactSVG src={editIcon} className={s.item} />
      </button>
      <button className={`${s.item} ${s.button}`}>
        <ReactSVG src={trashIcon} className={s.item} />
      </button>
    </div>
  )
}
