import React, { useState } from 'react'
import { ReactSVG } from 'react-svg'

import checkIcon from '@/img/checkIcon.svg'
import * as Checkbox from '@radix-ui/react-checkbox'

import s from './CheckBox.module.scss'

import { Typography } from '../Typography'

type Props = {
  disabled?: boolean
  title?: string
}

export const SuperCheckBox = ({ disabled = false, title }: Props) => {
  const [checked, setChecked] = useState<boolean>(false)
  const onClickHanlder = () => {
    setChecked(checked ? false : true)
  }

  return (
    <div className={s.superWrapper}>
      <div className={s.wrapper} onClick={disabled ? () => {} : onClickHanlder}>
        {!checked ? (
          <div className={`${s.unChecked} ${disabled && s.disabledUnchecked}`}></div>
        ) : (
          <Checkbox.Root
            checked={checked}
            className={`${s.checkBox} ${checked ? s.checked : ''} ${disabled && s.disabled}`}
          >
            <Checkbox.Indicator className={s.CheckboxIndicator}>
              <ReactSVG className={`${disabled ? s.svgDisabled : s.svg}`} src={checkIcon} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        )}
        {!disabled && <span className={`${disabled ? s.LabelDisabled : s.Label}`}></span>}
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
