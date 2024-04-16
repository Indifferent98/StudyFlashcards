import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { radioUtil } from '@/components/ui/RadioGroup/utils'
import { Typography } from '@/components/ui/Typography'
import { useGetDeckByIdQuery, useSaveCardGradeMutation } from '@/services/api'
import { cardResponseItem } from '@/services/flashcards.types'

import s from './CardContent.module.scss'

export const CardContent = ({
  answer,
  answerImg,
  answerVideo,
  created,
  deckId,
  grade,
  id,
  question,
  questionImg,
  questionVideo,
  shots,
  updated,
  userId,
}: Partial<Omit<cardResponseItem, 'answer' | 'question'>> & {
  answer: string
  question: string
}) => {
  const [saveCardGrade, saveCardGradeCreationStatus] = useSaveCardGradeMutation()

  const { data } = useGetDeckByIdQuery({ id: deckId ? deckId : '' })
  const [isAnswered, setIsAnswered] = useState(false)
  const buttonHandler = () => {
    setIsAnswered(!isAnswered)
    const grade = localStorage.getItem('grade')

    if (id && deckId && isAnswered) {
      saveCardGrade({ cardId: id, deckId, grade: Number(grade) })
    }
  }
  const changeRadioVariant = (variant: string) => {
    const grade = radioUtil(variant)

    localStorage.setItem('grade', String(grade))
  }

  return (
    <>
      <Typography variant={'H1'}>{`Learn ${data?.name}`}</Typography>
      <div className={s.question}>
        <Typography as={'span'} variant={'Subtitle1'}>
          {'Question: '}
        </Typography>
        <Typography as={'span'} variant={'Body2'}>
          {question}
        </Typography>
        <div className={s.imgWrapper}>
          <div>{questionImg && <img alt={''} className={s.imgSize} src={questionImg} />}</div>
        </div>
      </div>
      {isAnswered && (
        <div className={s.contentBlock}>
          <Typography as={'span'} variant={'Subtitle1'}>
            {'Answer: '}
          </Typography>
          <Typography as={'span'} variant={'Body2'}>
            {answer}
          </Typography>
          <div className={s.imgWrapper}>
            <div>{answerImg && <img alt={''} className={s.imgSize} src={answerImg} />}</div>
          </div>
        </div>
      )}
      {!isAnswered && (
        <div className={s.contentBlock}>
          <RadioGroup changeVariant={changeRadioVariant} />
        </div>
      )}
      <Button fullWidth onClick={buttonHandler}>
        {isAnswered ? 'Next Question' : 'Show Answer'}
      </Button>
    </>
  )
}
