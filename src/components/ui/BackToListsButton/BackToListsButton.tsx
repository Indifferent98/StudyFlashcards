import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import leftArrow from '@/img/leftBigArrow.svg'
import s from '@/Pages/Cards/Cards.module.scss'
type Props = {
  variant: 'decks' | 'cards'
  url: string
}
export const BackToListsButton = ({ variant, url }: Props) => {
  return (
    <Link style={{ padding: '0px 0px' }} to={url}>
      <div className={s.arrowStyle}>
        <ReactSVG src={leftArrow} style={{ display: 'inline-block' }} /> {`Back to ${variant} list`}
      </div>
    </Link>
  )
}
