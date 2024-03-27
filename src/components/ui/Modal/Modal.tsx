import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'

import closeIcon from '@/img/closeIcon.svg'
import { useCreateDeckMutation, useRemoveDeckByIdMutation } from '@/services/api/decks.service'
import { useAppDispatch } from '@/services/hooks'
import { selectRemoveDeckModalId } from '@/services/selectors'
import { appAction } from '@/services/slices/appSlice'

import s from './Modal.module.scss'

import { Button } from '../Button'
import { Typography } from '../Typography'
import { AddNewCard } from './ModalBody/AddNewCard'
import { AddNewDeck } from './ModalBody/AddNewDeck'
import { DeleteCard } from './ModalBody/DeleteCard'
import { DeleteDeck } from './ModalBody/DeleteDeck'

export type ModalVariant = 'Card' | 'Deck' | 'Delete Deck' | 'DeleteCard'
type Props = {
  deckName?: string
  variant: ModalVariant
}
export const Modal = ({ deckName, variant }: Props) => {
  const Title =
    variant === 'Deck'
      ? 'Add New Deck'
      : variant === 'Card'
      ? 'Add New Card'
      : variant === 'Delete Deck'
      ? 'Delete Deck'
      : 'Delete Card'

  const [createDeck, deckCreationStatus] = useCreateDeckMutation()
  const [showModal, setShowModal] = useState(true)
  const closeModal = () => setShowModal(false)
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode } = appAction
  const [deckTitle, setDeckTitle] = useState('')
  const [isPrivatePack, setIsPrivatePack] = useState(false)
  const [removeDeck, removeDeckCretionStatus] = useRemoveDeckByIdMutation()

  const removeDeckModalId = useSelector(selectRemoveDeckModalId)

  return (
    showModal && (
      <div className={s.wrapper}>
        <div className={s.title}>
          <Typography children={Title} className={s.titleItem} variant={'H3'} />
          <button
            className={s.button}
            onClick={() => {
              closeModal()
              dispatch(changeBackGroundDarkMode({ mode: false }))
            }}
          >
            <ReactSVG className={s.svg} src={closeIcon} />
          </button>
        </div>
        <div className={s.content}>
          {variant === 'Card' ? (
            <AddNewCard />
          ) : variant === 'Deck' ? (
            <AddNewDeck
              deckTitle={deckTitle}
              isPrivatePack={isPrivatePack}
              setDeckTitle={setDeckTitle}
              setIsPrivatePack={setIsPrivatePack}
            />
          ) : variant === 'Delete Deck' ? (
            <DeleteDeck />
          ) : (
            <DeleteCard cardName={'Card name'} />
          )}
        </div>
        <div className={s.footer}>
          <Button
            children={'Cancel'}
            display={'inlineBlock'}
            onClick={() => {
              dispatch(changeBackGroundDarkMode({ mode: false }))
            }}
            variant={'secondary'}
          />
          <Button
            children={Title}
            display={'inlineBlock'}
            onClick={() => {
              if (variant === 'Deck') {
                createDeck({ isPrivate: isPrivatePack, name: deckTitle })
                dispatch(changeBackGroundDarkMode({ mode: false }))
              }
              if (variant === 'Delete Deck') {
                removeDeck({ id: removeDeckModalId })
                dispatch(changeBackGroundDarkMode({ mode: false }))
              }
            }}
          />
        </div>
      </div>
    )
  )
}
