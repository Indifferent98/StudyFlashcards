import { useEffect, useState } from 'react'
import { Button } from '../Button'
import { RadioGroup } from '../RadioGroup'
import { Typography } from '../Typography'
import s from './Card.module.scss'
type Props = {
  deckName: string
  question: string
  answer: string
}
export const Card = ({ deckName, question, answer }: Props) => {
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
        <div className={s.header}>
          <Typography variant="H1" children={`Learn Deck: ${deckName}`} />
        </div>
        <div className={s.question}>
          <Typography variant="Subtitle1" children={`Question: `} as="span" />
          <Typography variant="Body1" children={`${question}`} as="span" />
        </div>
        <div className={s.comment}>
          <Typography
            variant="Subtitle2"
            children={`Количество попыток ответов на вопрос: 10`}
            color="#808080"
          />
        </div>
        <div className={s.answer}>
          <Typography variant="Subtitle1" children={`Answer: `} as="span" />
          <Typography variant="Body1" children={`${answer}`} as="span" />
        </div>
        <div className={s.rate}>
          <Typography variant="Subtitle1" children={`Rate yourself: `} />
        </div>
        <RadioGroup />
        <div className={s.buttonBlock}>
          <Button children={'Next Question'} fullWidth={true} height="36px" />
        </div>
        {/* <div className={s.background}></div> */}
      </div>
    )
  )
}
