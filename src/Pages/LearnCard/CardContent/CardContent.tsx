import { Button } from '@/components/ui/Button'
import { RadioGroup } from '@/components/ui/RadioGroup'
import { Typography } from '@/components/ui/Typography'
import { useGetDeckByIdQuery } from '@/services/api'
import { cardResponseItem } from '@/services/flashcards.types'
import { useState } from 'react'

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
  const { data } = useGetDeckByIdQuery({ id: deckId ? deckId : '' })
  const [isAnswered, setIsAnswered] = useState(false)
  const buttonHandler = () => {
    setIsAnswered(!isAnswered)
  }

  return (
    <div>
      <Typography variant="H1">{`Learn ${data?.name}`}</Typography>
      <div style={{ marginBottom: '15px' }}>
        <Typography variant="Subtitle1" as="span">
          {'Question: '}
        </Typography>
        <Typography variant="Body2" as="span">
          {question}
        </Typography>
        {questionImg && (
          <img src={questionImg} alt="" style={{ width: '350px', height: '120px' }} />
        )}
      </div>
      {isAnswered && (
        <div style={{ marginBottom: '25px' }}>
          <Typography variant="Subtitle1" as="span">
            {'Answer: '}
          </Typography>
          <Typography variant="Body2" as="span">
            {answer}
          </Typography>
          {questionImg && (
            <img src={answerImg} alt="" style={{ width: '350px', height: '120px' }} />
          )}
        </div>
      )}
      {!isAnswered && (
        <div style={{ marginBottom: '25px' }}>
          <RadioGroup />
        </div>
      )}
      <Button onClick={buttonHandler} fullWidth>
        {isAnswered ? 'Next Question' : 'Show Answer'}
      </Button>
    </div>
  )
}
