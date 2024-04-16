import { useEffect, useState } from 'react'

import { CardContent } from '@/Pages/LearnCard/CardContent'
import { CheckEmail } from '@/components/auth/login-form/CheckEmail/CheckEmail'
import { CreateNewPassword } from '@/components/auth/login-form/CreateNewPassword'
import { ForgotPassword } from '@/components/auth/login-form/ForgotPassword'
import { SignIn } from '@/components/auth/login-form/SignIn/SignIn'
import { SignUp } from '@/components/auth/login-form/SignUp'

import s from './Card.module.scss'

import { AnswerCard, CardProps } from './CardsType/AnswerCard'

type Props = {
  answerImg?: string
  cardId?: string
  deckId?: string
  questionImg?: string
  variant:
    | 'Answer'
    | 'CheckEmail'
    | 'CreateNewPassword'
    | 'SignIn'
    | 'SignUp'
    | 'forgotPassword'
    | 'learnCard'
} & Partial<CardProps>
export const Card = ({
  answer = '',
  answerImg = '',
  cardId,
  deckId,
  deckName = '',
  question = '',
  questionImg = '',
  variant,
}: Props) => {
  // const [showCard, setShowCard] = useState(true)

  // const closeCard = () => {
  //   debugger
  //   setShowCard(false)
  // }

  // useEffect(() => {
  //   window.addEventListener('click', closeCard)

  //   return () => window.removeEventListener('click', closeCard)
  // }, [])

  // const aa = (e: any) => {
  //   e.stopPropagation()
  // }

  return (
    <div className={s.wrapper}>
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
        <CardContent
          answer={answer}
          answerImg={answerImg}
          deckId={deckId}
          id={cardId}
          question={question}
          questionImg={questionImg}
        />
      )}
    </div>
  )
}
