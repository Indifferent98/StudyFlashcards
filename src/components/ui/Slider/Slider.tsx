import React, { useState } from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

import { Typography } from '../Typography'
import { filtersAction } from '@/services/slices/filterSlice'
import { useAppDispatch } from '@/services/hooks'
import { selectMinCards, selectMaxCards } from '@/services/selectors'
import { useSelector } from 'react-redux'

type SuperSlider = {
  range: number[]
}
export const SuperSlider = ({ range }: SuperSlider) => {
  const { changeMaxCardsCount, changeMinCardsCount } = filtersAction
  const dispatch = useAppDispatch()
  const [timerId, setTimerId] = useState<string | number | NodeJS.Timeout | undefined>()
  const minCards = useSelector(selectMinCards)
  const maxCards = useSelector(selectMaxCards)

  const onChangeHandler = (value: number[]) => {
    console.log(value)
    clearTimeout(timerId)
    setSliderValue(value)
    setTimerId(
      setTimeout(() => {
        console.log('timer is')
        dispatch(changeMinCardsCount({ minCard: value[0] }))
        dispatch(changeMaxCardsCount({ maxCard: value[1] }))
      }, 1000)
    )
  }

  const [sliderValue, setSliderValue] = useState([minCards, maxCards])
  console.log(minCards, 'miiiiiin')
  console.log(maxCards, 'maxxxxxx')
  return (
    <div className={s.wrapper}>
      <Typography children={sliderValue[0]} className={s.valueBox} variant={'Body1'} />
      <form>
        <Slider.Root
          className={s.SliderRoot}
          defaultValue={[minCards, maxCards]}
          minStepsBetweenThumbs={1}
          onValueChange={onChangeHandler}
          step={1}
          value={sliderValue}
        >
          <Slider.Track className={s.SliderTrack}>
            <Slider.Range className={s.SliderRange} />
          </Slider.Track>
          <Slider.Thumb className={s.SliderThumb} />
          <Slider.Thumb className={s.SliderThumb} />
        </Slider.Root>
      </form>
      <Typography children={sliderValue[1]} className={s.valueBox} variant={'Body1'} />
    </div>
  )
}
