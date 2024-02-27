import { Typography } from '../../Typography'
import { Button } from '../../Button'
import s from './AnswerCard.module.scss'
import { RadioGroup } from '../../RadioGroup'
export type CardProps = {
  answer: string
  deckName: string
  question: string
}
export const AnswerCard = ({ answer, deckName, question }: CardProps) => {
  return (
    <>
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
    </>
  )
}
