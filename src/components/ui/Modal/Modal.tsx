import { useState } from 'react'
import { ReactSVG } from 'react-svg'

import closeIcon from '@/img/closeIcon.svg'

import s from './Modal.module.scss'

import { Button } from '../Button'
import { Typography } from '../Typography'
import { AddNewCard } from './ModalBody/AddNewCard'
import { AddNewDeck } from './ModalBody/AddNewDeck'
import { DeleteCard } from './ModalBody/DeleteCard'
type Props = {
  variant: 'Card' | 'Deck' | 'DeleteCard'
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
          <Typography children={Title} className={s.titleItem} variant={'H3'} />
          <button className={s.button} onClick={closeModal}>
            <ReactSVG className={s.svg} src={closeIcon} />
          </button>
        </div>
        <div className={s.content}>
          {variant === 'Card' ? (
            <AddNewCard />
          ) : variant === 'Deck' ? (
            <AddNewDeck />
          ) : (
            <DeleteCard cardName={'Card name'} />
          )}
        </div>
        <div className={s.footer}>
          <Button children={'Cancel'} display={'inlineBlock'} variant={'secondary'} />
          <Button children={Title} display={'inlineBlock'} />
        </div>
      </div>
    )
  )
}
