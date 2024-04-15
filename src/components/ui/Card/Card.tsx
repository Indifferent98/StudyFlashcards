import { useEffect, useState } from 'react'
import { CheckEmail } from '@/components/auth/login-form/CheckEmail/CheckEmail'
import { CreateNewPassword } from '@/components/auth/login-form/CreateNewPassword'
import { ForgotPassword } from '@/components/auth/login-form/ForgotPassword'
import { SignIn } from '@/components/auth/login-form/SignIn/SignIn'
import { SignUp } from '@/components/auth/login-form/SignUp'
import s from './Card.module.scss'
import { AnswerCard, CardProps } from './CardsType/AnswerCard'
import { CardContent } from '@/Pages/LearnCard/CardContent'

type Props = {
  deckId?: string
  questionImg?: string
  answerImg?: string
  cardId?: string
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
  deckName = '',
  question = '',
  deckId,
  variant,
  questionImg = '',
  answerImg = '',
  cardId,
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
          question={question}
          deckId={deckId}
          answerImg={answerImg}
          questionImg={questionImg}
          id={cardId}
        />
      )}
    </div>
  )
}
