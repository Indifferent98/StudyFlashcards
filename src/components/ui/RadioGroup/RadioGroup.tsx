import { useState } from 'react'

import * as Radio from '@radix-ui/react-radio-group'

import s from './RadioGroup.module.scss'
import { radioUtil } from './utils'

type Props = {
  disabled?: boolean
  changeVariant: (variant: string) => void
}
export const RadioGroup = ({ disabled = false, changeVariant }: Props) => {
  const [currentValue, setCurrentValue] = useState<string>('')

  const changeValue = (item: string) => {
    changeVariant(item)
    setCurrentValue(item)
  }

  return (
    <form className={s.wrapper}>
      <Radio.Root
        aria-label={'View density'}
        className={s.RadioGroupRoot}
        defaultValue={'default'}
        onValueChange={changeValue}
      >
        <div className={`${currentValue === 'Did not know' ? s.activeItemWrapper : s.itemWrapper}`}>
          <Radio.Item
            className={`${disabled ? s.RadioGroupItemDisabled : s.RadioGroupItem}`}
            disabled={disabled}
            id={'r1'}
            value={'Did not know'}
          >
            <Radio.Indicator
              className={`${disabled ? s.RadioGroupIndicatorDisabled : s.RadioGroupIndicator}`}
            />
          </Radio.Item>

          <label className={`${disabled ? s.LabelDisabled : s.Label}`} htmlFor={'r1'}>
            Did not know
          </label>
          {!disabled && (
            <span
              className={`${!disabled && s.circle} ${
                currentValue === 'Did not know' && s.activeItem
              }`}
            ></span>
          )}
        </div>
        <div className={`${currentValue === 'Forgot' ? s.activeItemWrapper : s.itemWrapper}`}>
          <Radio.Item
            className={`${disabled ? s.RadioGroupItemDisabled : s.RadioGroupItem}`}
            disabled={disabled}
            id={'r2'}
            value={'Forgot'}
          >
            <Radio.Indicator
              className={`${disabled ? s.RadioGroupIndicatorDisabled : s.RadioGroupIndicator}`}
            />
          </Radio.Item>
          <label className={`${disabled ? s.LabelDisabled : s.Label}`} htmlFor={'r2'}>
            Forgot
          </label>
          {!disabled && (
            <span
              className={`${!disabled && s.circle} ${currentValue === 'Forgot' && s.activeItem}`}
            ></span>
          )}
        </div>
        <div
          className={`${currentValue === 'A lot of though' ? s.activeItemWrapper : s.itemWrapper}`}
        >
          <Radio.Item
            className={`${disabled ? s.RadioGroupItemDisabled : s.RadioGroupItem}`}
            disabled={disabled}
            id={'r3'}
            value={'A lot of though'}
          >
            <Radio.Indicator
              className={`${disabled ? s.RadioGroupIndicatorDisabled : s.RadioGroupIndicator}`}
            />
          </Radio.Item>
          <label className={`${disabled ? s.LabelDisabled : s.Label}`} htmlFor={'r3'}>
            A lot of though
          </label>
          {!disabled && (
            <span
              className={`${!disabled && s.circle} ${
                currentValue === 'A lot of though' && s.activeItem
              }`}
            ></span>
          )}
        </div>
        <div className={`${currentValue === 'Confused' ? s.activeItemWrapper : s.itemWrapper}`}>
          <Radio.Item
            className={`${disabled ? s.RadioGroupItemDisabled : s.RadioGroupItem}`}
            disabled={disabled}
            id={'r4'}
            value={'Confused'}
          >
            <Radio.Indicator
              className={`${disabled ? s.RadioGroupIndicatorDisabled : s.RadioGroupIndicator}`}
            />
          </Radio.Item>
          <label className={`${disabled ? s.LabelDisabled : s.Label}`} htmlFor={'r4'}>
            Confused
          </label>
          {!disabled && (
            <span
              className={`${!disabled && s.circle} ${currentValue === 'Confused' && s.activeItem}`}
            ></span>
          )}
        </div>
        <div
          className={`${currentValue === 'Knew the answer' ? s.activeItemWrapper : s.itemWrapper}`}
        >
          <Radio.Item
            className={`${disabled ? s.RadioGroupItemDisabled : s.RadioGroupItem}`}
            disabled={disabled}
            id={'r5'}
            value={'Knew the answer'}
          >
            <Radio.Indicator
              className={`${disabled ? s.RadioGroupIndicatorDisabled : s.RadioGroupIndicator}`}
            />
          </Radio.Item>
          <label className={`${disabled ? s.LabelDisabled : s.Label}`} htmlFor={'r5'}>
            Knew the answer
          </label>
          {!disabled && (
            <span
              className={`${!disabled && s.circle} ${
                currentValue === 'Knew the answer' && s.activeItem
              }`}
            ></span>
          )}
        </div>
      </Radio.Root>
    </form>
  )
}
