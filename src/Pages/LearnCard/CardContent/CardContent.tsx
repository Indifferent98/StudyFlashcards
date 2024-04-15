import { Button } from '@/components/ui/Button'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { Typography } from '@/components/ui/Typography'
import { useGetDeckByIdQuery, useSaveCardGradeMutation } from '@/services/api'
import { cardResponseItem } from '@/services/flashcards.types'
import { useState } from 'react'
import s from './CardContent.module.scss'
import { radioUtil } from '@/components/ui/RadioGroup/utils'

export const CardContent = ({
  answer,
  created,
  deckId,
  grade,
  id,
  question,
  shots,
  updated,
  userId,
  answerImg,
  answerVideo,
  questionImg,
  questionVideo,
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
      <Typography variant="H1">{`Learn ${data?.name}`}</Typography>
      <div className={s.question}>
        <Typography variant="Subtitle1" as="span">
          {'Question: '}
        </Typography>
        <Typography variant="Body2" as="span">
          {question}
        </Typography>
        <div className={s.imgWrapper}>
          <div>{questionImg && <img src={questionImg} alt="" className={s.imgSize} />}</div>
        </div>
      </div>
      {isAnswered && (
        <div className={s.contentBlock}>
          <Typography variant="Subtitle1" as="span">
            {'Answer: '}
          </Typography>
          <Typography variant="Body2" as="span">
            {answer}
          </Typography>
          <div className={s.imgWrapper}>
            <div>{answerImg && <img src={answerImg} alt="" className={s.imgSize} />}</div>
          </div>
        </div>
      )}
      {!isAnswered && (
        <div className={s.contentBlock}>
          <RadioGroup changeVariant={changeRadioVariant} />
        </div>
      )}
      <Button onClick={buttonHandler} fullWidth>
        {isAnswered ? 'Next Question' : 'Show Answer'}
      </Button>
    </>
  )
}
