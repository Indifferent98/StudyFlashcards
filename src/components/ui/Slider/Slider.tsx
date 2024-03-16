import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/services/hooks'
import { selectMaxCards, selectMinCards } from '@/services/selectors'
import { filtersAction } from '@/services/slices/filterSlice'
import * as Slider from '@radix-ui/react-slider'

import s from './Slider.module.scss'

import { EditableSpan } from '../EditableSpan/EditableSpan'

type SuperSlider = {
  range: number[]
}
export const SuperSlider = ({ range }: SuperSlider) => {
  const { changeMaxCardsCount, changeMinCardsCount } = filtersAction
  const dispatch = useAppDispatch()
  const [timerId, setTimerId] = useState<NodeJS.Timeout | number | string | undefined>()

  const minCards = useSelector(selectMinCards)
  const maxCards = useSelector(selectMaxCards)

  useEffect(() => {
    if (minCards === 1 && maxCards === 100) {
      setSliderValue([minCards, maxCards])
    }
  }, [minCards, maxCards])

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
      <EditableSpan type={'min'} value={sliderValue[0]} />
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
      <EditableSpan type={'max'} value={sliderValue[1]} />
      {/* <Typography children={sliderValue[1]} className={s.valueBox} variant={'Body1'} /> */}
    </div>
  )
}
