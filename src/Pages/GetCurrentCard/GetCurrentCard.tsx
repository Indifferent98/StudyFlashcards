import { useState } from 'react'

import { BackToListsButton } from '@/components/ui/BackToListsButton'
import { Card } from '@/components/ui/Card'
import { useGetCardByIdQuery, useGetRandomCardQuery } from '@/services/api'

import s from './GetCurrentCard.module.scss'

export const GetCurrentCard = () => {
  const [url, setUrl] = useState(window.location.href)

  let lastQuestionId

  let parts = url.split('/')
  let secondParam = parts[parts.length - 2]
  let lastParam = parts[parts.length - 1]
  console.log(lastParam)
  const { data, isLoading, isFetching, refetch } = useGetCardByIdQuery({ id: lastParam })

  if (data) {
    lastQuestionId = data.id
  }

  if (isLoading || isFetching) {
    return <h1> is Loading...</h1>
  }

  return (
    <div className={s.wrapper}>
      <BackToListsButton url={`/cards/${secondParam}`} variant={'cards'} />
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
