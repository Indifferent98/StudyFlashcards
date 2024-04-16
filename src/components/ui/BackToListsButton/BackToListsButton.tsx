import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import leftArrow from '@/img/leftBigArrow.svg'

import s from '@/Pages/Cards/Cards.module.scss'
type Props = {
  url: string
  variant: 'cards' | 'decks'
}
export const BackToListsButton = ({ url, variant }: Props) => {
  return (
    <Link style={{ padding: '0px 0px' }} to={url}>
      <div className={s.arrowStyle}>
        <ReactSVG src={leftArrow} style={{ display: 'inline-block' }} /> {`Back to ${variant} list`}
      </div>
    </Link>
  )
}
