import { Card } from '@/components/ui/Card'
import { useGetRandomCardQuery } from '@/services/api'
import { useState } from 'react'

export const LearnCard = () => {
  const [url, setUrl] = useState(window.location.href)
  const lastPath = url.substring(url.lastIndexOf('/') + 1)
  console.log('cardIdIs', lastPath)
  const { data, isLoading } = useGetRandomCardQuery({ id: lastPath })

  if (isLoading) {
    return <h1> is Loading...</h1>
  }

  return (
    <div>
      <Card
        variant="learnCard"
        answer={data?.answer}
        question={data?.question}
        deckId={data?.deckId}
      />
    </div>
  )
}
