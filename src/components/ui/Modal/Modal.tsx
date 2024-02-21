import { ReactSVG } from 'react-svg'
import { Typography } from '../Typography'
import s from './Modal.module.scss'
import closeIcon from '@/img/closeIcon.svg'
import { useState } from 'react'
import { Button } from '../Button'
import { AddNewDeck } from './ModalBody/AddNewDeck'
import { DeleteCard } from './ModalBody/DeleteCard'
import { AddNewCard } from './ModalBody/AddNewCard'
type Props = {
  variant: 'Deck' | 'Card' | 'DeleteCard'
}
export const Modal = ({ variant }: Props) => {
  const Title =
    variant === 'Deck' ? 'Add New Deck' : variant === 'Card' ? 'Add New Card' : 'Delete Card'

  const [showModal, setShowModal] = useState(true)
  const closeModal = () => setShowModal(false)
  return (
    showModal && (
      <div className={s.wrapper}>
        <div className={s.title}>
          <Typography className={s.titleItem} variant="H3" children={Title} />
          <button onClick={closeModal} className={s.button}>
            <ReactSVG src={closeIcon} className={s.svg} />
          </button>
        </div>
        <div className={s.content}>
          {variant === 'Card' ? (
            <AddNewCard />
          ) : variant === 'Deck' ? (
            <AddNewDeck />
          ) : (
            <DeleteCard cardName="Card name" />
          )}
        </div>
        <div className={s.footer}>
          <Button children={'Cancel'} display="inlineBlock" variant="secondary" />
          <Button children={Title} display="inlineBlock" />
        </div>
      </div>
    )
  )
}
