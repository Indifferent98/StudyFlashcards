import { useEffect, useState } from 'react'

import s from './Card.module.scss'

import { Button } from '../Button'
import { RadioGroup } from '../RadioGroup'
import { Typography } from '../Typography'
type Props = {
  answer: string
  deckName: string
  question: string
}
export const Card = ({ answer, deckName, question }: Props) => {
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
          <Typography children={`Learn Deck: ${deckName}`} variant={'H1'} />
        </div>
        <div className={s.question}>
          <Typography as={'span'} children={`Question: `} variant={'Subtitle1'} />
          <Typography as={'span'} children={`${question}`} variant={'Body1'} />
        </div>
        <div className={s.comment}>
          <Typography
            children={`Количество попыток ответов на вопрос: 10`}
            color={'#808080'}
            variant={'Subtitle2'}
          />
        </div>
        <div className={s.answer}>
          <Typography as={'span'} children={`Answer: `} variant={'Subtitle1'} />
          <Typography as={'span'} children={`${answer}`} variant={'Body1'} />
        </div>
        <div className={s.rate}>
          <Typography children={`Rate yourself: `} variant={'Subtitle1'} />
        </div>
        <RadioGroup />
        <div className={s.buttonBlock}>
          <Button children={'Next Question'} fullWidth height={'36px'} />
        </div>
        {/* <div className={s.background}></div> */}
      </div>
    )
  )
}
