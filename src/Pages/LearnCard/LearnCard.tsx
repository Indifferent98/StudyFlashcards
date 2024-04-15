import { BackToListsButton } from '@/components/ui/BackToListsButton'
import { Card } from '@/components/ui/Card'
import { useGetRandomCardQuery } from '@/services/api'
import s from './LearnCard.module.scss'
import { useState } from 'react'

export const LearnCard = () => {
  const [url, setUrl] = useState(window.location.href)
  const lastPath = url.substring(url.lastIndexOf('/') + 1)
  console.log('here CARD')
  console.log(lastPath, 'last path')
  let lastQuestionId
  const { data, isLoading, isFetching } = useGetRandomCardQuery({
    id: lastPath,
    previousCardId: lastQuestionId,
  })

  if (data) {
    lastQuestionId = data.id
  }

  if (isLoading || isFetching) {
    return <h1> is Loading...</h1>
  }

  return (
    <div className={s.wrapper}>
      <BackToListsButton variant="cards" url={`/cards/${lastPath}`} />
      <Card
        variant="learnCard"
        answer={data?.answer}
        question={data?.question}
        deckId={data?.deckId}
        answerImg={data?.answerImg}
        questionImg={data?.questionImg}
        cardId={data?.id}
      />
    </div>
  )
}
