import { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'

import closeIcon from '@/img/closeIcon.svg'
import {
  useChangeDeckByIdMutation,
  useCreateCardMutation,
  useCreateDeckMutation,
  useRemoveDeckByIdMutation,
} from '@/services/api/decks.service'
import { useAppDispatch } from '@/services/hooks'
import { selectCurrentCardId, selectRemoveDeckModalId } from '@/services/selectors'
import { appAction } from '@/services/slices/appSlice'

import s from './Modal.module.scss'

import { Button } from '../Button'
import { Typography } from '../Typography'
import { AddNewCard } from './ModalBody/AddNewCard'
import { AddNewDeck } from './ModalBody/AddNewDeck'
import { DeleteCard } from './ModalBody/DeleteCard'
import { DeleteDeck } from './ModalBody/DeleteDeck'
import { useUpdateCardMutation } from '@/services/api'

export type ModalVariant =
  | 'Add new card'
  | 'Change Deck'
  | 'Add New Deck'
  | 'Delete Deck'
  | 'Delete Card'
  | 'Change Card'
type Props = {
  deckName?: string
  variant: ModalVariant
}
export const Modal = ({ deckName, variant }: Props) => {
  console.log('varioat', variant)
  const [createDeck, deckCreationStatus] = useCreateDeckMutation()
  const [showModal, setShowModal] = useState(true)
  const closeModal = () => setShowModal(false)
  const dispatch = useAppDispatch()
  const { changeBackGroundDarkMode } = appAction
  const [deckTitle, setDeckTitle] = useState('')
  const [isPrivatePack, setIsPrivatePack] = useState(false)
  const [removeDeck, removeDeckCretionStatus] = useRemoveDeckByIdMutation()
  const [createCard, createCardCreationStatus] = useCreateCardMutation()
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [changeDeck, changeDeckCreationStatus] = useChangeDeckByIdMutation()
  const [cover, setCover] = useState('')
  const [changeCard, changeCardCreationStatus] = useUpdateCardMutation()
  const currentCardId = useSelector(selectCurrentCardId)
  const changeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.currentTarget.value)
  }
  const changeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.currentTarget.value)
  }
  const removeDeckModalId = useSelector(selectRemoveDeckModalId)
  const [url, setUrl] = useState(window.location.href)
  const lastPath = url.substring(url.lastIndexOf('/') + 1)
  const deckId = useSelector(selectRemoveDeckModalId)
  return (
    showModal && (
      <div className={s.wrapper}>
        <div className={s.title}>
          <Typography children={variant} className={s.titleItem} variant={'H3'} />
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
          {variant === 'Add New Deck' || variant === 'Change Deck' ? (
            <AddNewDeck
              deckTitle={deckTitle}
              isPrivatePack={isPrivatePack}
              setDeckTitle={setDeckTitle}
              setIsPrivatePack={setIsPrivatePack}
            />
          ) : variant === 'Delete Deck' ? (
            <DeleteDeck />
          ) : variant === 'Add new card' || variant === 'Change Card' ? (
            <AddNewCard
              answer={answer}
              changeAnswer={changeAnswer}
              changeQuestion={changeQuestion}
              question={question}
            />
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
            children={variant}
            display={'inlineBlock'}
            onClick={() => {
              if (variant === 'Add New Deck') {
                createDeck({ isPrivate: isPrivatePack, name: deckTitle })
              }
              if (variant === 'Delete Deck') {
                removeDeck({ id: removeDeckModalId })
              }
              if (variant === 'Add new card') {
                // removeDeck({ id: removeDeckModalId })
                createCard({ answer, id: lastPath, question })
              }
              if (variant === 'Change Deck') {
                changeDeck({ id: deckId, cover, isPrivate: isPrivatePack, name: deckTitle })
              }
              if (variant === 'Change Card') {
                changeCard({ id: currentCardId, answer, question })
              }
              dispatch(changeBackGroundDarkMode({ mode: false }))
            }}
          />
        </div>
      </div>
    )
  )
}
