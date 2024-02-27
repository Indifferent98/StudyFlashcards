import { useEffect, useState } from 'react'

import s from './Card.module.scss'
import { AnswerCard, CardProps } from './CardsType/AnswerCard'
import { SignIn } from '@/components/auth/login-form/SignIn/SignIn'

type Props = { variant: 'Answer' | 'SignIn' } & Partial<CardProps>
export const Card = ({ answer = '', deckName = '', question = '', variant }: Props) => {
  const [showCard, setShowCard] = useState(true)
  const closeCard = () => {
    setShowCard(false)
  }

  useEffect(() => {
    window.addEventListener('click', closeCard)

    return () => window.removeEventListener('click', closeCard)
  }, [])

  const aa = (e: any) => {
    e.stopPropagation()
  }

  return (
    showCard && (
      <div className={s.wrapper} onClick={aa}>
        {variant === 'Answer' ? (
          <AnswerCard answer={answer} deckName={deckName} question={question} />
        ) : variant === 'SignIn' ? (
          <SignIn />
        ) : (
          false
        )}
        {/* <div className={s.background}></div> */}
      </div>
    )
  )
}
