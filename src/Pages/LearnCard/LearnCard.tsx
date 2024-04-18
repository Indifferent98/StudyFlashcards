import { useState } from 'react'

import { BackToListsButton } from '@/components/ui/BackToListsButton'
import { Card } from '@/components/ui/Card'
import { useGetRandomCardQuery } from '@/services/api'

import s from './LearnCard.module.scss'

export const LearnCard = () => {
  const [url, setUrl] = useState(window.location.href)
  const lastPath = url.substring(url.lastIndexOf('/') + 1)

  console.log('here CARD')
  console.log(lastPath, 'last path')
  let lastQuestionId
  const { data, isFetching, isLoading, refetch } = useGetRandomCardQuery({
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
      <BackToListsButton url={`/cards/${lastPath}`} variant={'cards'} />
      <Card
        refetch={refetch}
        answer={data?.answer}
        answerImg={data?.answerImg}
        cardId={data?.id}
        deckId={data?.deckId}
        question={data?.question}
        questionImg={data?.questionImg}
        variant={'learnCard'}
      />
    </div>
  )
}
