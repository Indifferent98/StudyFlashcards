import { useEffect, useState } from 'react'

import { CheckEmail } from '@/components/auth/login-form/CheckEmail/CheckEmail'
import { CreateNewPassword } from '@/components/auth/login-form/CreateNewPassword'
import { ForgotPassword } from '@/components/auth/login-form/ForgotPassword'
import { SignIn } from '@/components/auth/login-form/SignIn/SignIn'
import { SignUp } from '@/components/auth/login-form/SignUp'

import s from './Card.module.scss'

import { AnswerCard, CardProps } from './CardsType/AnswerCard'

type Props = {
  variant: 'Answer' | 'CheckEmail' | 'CreateNewPassword' | 'SignIn' | 'SignUp' | 'forgotPassword'
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
        ) : variant === 'CreateNewPassword' ? (
          <CreateNewPassword />
        ) : (
          false
        )}
      </div>
    )
  )
}
