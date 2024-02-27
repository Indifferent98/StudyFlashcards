import React, { ComponentPropsWithoutRef, useState } from 'react'
import { ReactSVG } from 'react-svg'

import checkIcon from '@/img/checkIcon.svg'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './CheckBox.module.scss'

import { Typography } from '../Typography'

type Props = {
  checked?: boolean
  demo?: boolean
  disabled?: boolean
  onValueChange?: (checked: boolean) => void
  title?: string
}
export const SuperCheckBox = ({
  checked = false,
  demo = false,
  disabled = false,
  onValueChange,
  title,
}: Props) => {
  const [demoChecked, setDemoChecked] = useState(false)
  const onClickHandler = () => {
    if (onValueChange) {
      onValueChange(!checked)
    } else if (demo) {
      setDemoChecked(!demoChecked)
    }
  }

  return (
    <div className={s.superWrapper} onClick={disabled ? () => {} : onClickHandler}>
      <div className={s.wrapper}>
        {!checked && demoChecked === false ? (
          <div className={`${s.unChecked} ${disabled && s.disabledUnchecked}`}></div>
        ) : (
          <Checkbox.Root
            checked={demo ? demoChecked : checked}
            className={`${s.checkBox} ${checked || demoChecked ? s.checked : ''} ${
              disabled && s.disabled
            }`}
            onClick={disabled ? () => {} : onClickHandler}
            // name="rememberMe"
          >
            <Checkbox.Indicator className={s.CheckboxIndicator}>
              <ReactSVG className={`${disabled ? s.svgDisabled : s.svg}`} src={checkIcon} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        )}
        {!disabled && <span className={s.circle}></span>}
      </div>
      {title && (
        <Typography
          as={'span'}
          children={title}
          className={s.title}
          color={disabled ? '#808080' : ''}
          variant={'Body2'}
        />
      )}
    </div>
  )
}
