import React, { useState } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import s from './CheckBox.module.scss'
import { ReactSVG } from 'react-svg'
import checkIcon from '@/img/checkIcon.svg'
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
            className={`${s.checkBox} ${checked ? s.checked : ''} ${disabled && s.disabled}`}
            checked={checked}
          >
            <Checkbox.Indicator className={s.CheckboxIndicator}>
              <ReactSVG src={checkIcon} className={`${disabled ? s.svgDisabled : s.svg}`} />
            </Checkbox.Indicator>
          </Checkbox.Root>
        )}
        {!disabled && <span className={s.circle}></span>}
      </div>
      {/* {title && <span className={s.title}>{title}</span>} */}
      {title && <Typography variant="Body2" className={s.title} children={title} as="span" />}
    </div>
  )
}
