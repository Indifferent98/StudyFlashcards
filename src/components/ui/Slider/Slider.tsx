import React, { useState } from 'react'
import * as Slider from '@radix-ui/react-slider'
import s from './Slider.module.scss'
import { Typography } from '../Typography'

export const SuperSlider = () => {
  const onChangeHandler = (value: number[]) => {
    setSliderValue(value)
  }
  const [sliderValue, setSliderValue] = useState([0, 100])

  return (
    <div className={s.wrapper}>
      <Typography className={s.valueBox} children={sliderValue[0]} variant="Body1" />
      <form>
        <Slider.Root
          className={s.SliderRoot}
          defaultValue={[sliderValue[0], sliderValue[1]]}
          step={1}
          minStepsBetweenThumbs={1}
          onValueChange={onChangeHandler}
        >
          <Slider.Track className={s.SliderTrack}>
            <Slider.Range className={s.SliderRange} />
          </Slider.Track>

          <Slider.Thumb className={s.SliderThumb} />

          <Slider.Thumb className={s.SliderThumb} />
        </Slider.Root>
      </form>
      <Typography className={s.valueBox} children={sliderValue[1]} variant="Body1" />
    </div>
  )
}
