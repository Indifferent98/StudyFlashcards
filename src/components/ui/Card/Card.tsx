import { useEffect, useState } from 'react'

import s from './Card.module.scss'
import { AnswerCard, CardProps } from './CardsType/AnswerCard'
import { SignIn } from '@/components/auth/login-form/SignIn/SignIn'
import { SignUp } from '@/components/auth/login-form/SignUp'
import { ForgotPassword } from '@/components/auth/login-form/ForgotPassword'
import { CheckEmail } from '@/components/auth/login-form/CheckEmail/CheckEmail'

type Props = {
  variant: 'Answer' | 'SignIn' | 'SignUp' | 'forgotPassword' | 'CheckEmail'
} & Partial<CardProps>
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
        ) : variant === 'SignUp' ? (
          <SignUp />
        ) : variant === 'forgotPassword' ? (
          <ForgotPassword />
        ) : variant === 'CheckEmail' ? (
          <CheckEmail />
        ) : (
          false
        )}
      </div>
    )
  )
}
