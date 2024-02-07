import React, { ComponentPropsWithoutRef } from 'react'
import { Typography } from '../Typography'
import s from './Input.module.scss'
import logo from '@/img/eye-outline.svg'

import logo1 from '@/img/logOutIcon/logOutIcon.svg'

import { ReactSVG } from 'react-svg'

type Props = {
  helperMessage?: string
  errorMessage?: string | null
  variant?: 'default' | 'password' | 'search'
  fullWidth?: boolean
  disabled?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  helperMessage,
  errorMessage,
  variant = 'default',
  fullWidth = false,
  disabled = false,
  ...restProps
}: Props) => {
  return (
    <div className={s.wrapper}>
      {helperMessage && (
        <Typography
          variant="Body2"
          children={helperMessage}
          className={disabled ? s.disbaledHelperText : s.helperText}
        />
      )}
      <input
        className={`${s[variant]} ${disabled ? s.disabled : errorMessage ? s.error : s.input}`}
        disabled={disabled}
        type="text"
        {...restProps}
      />
      <div style={{ fill: 'red' }}>
        <ReactSVG src={logo1} style={{ stroke: 'red', fill: 'green' }} />
      </div>
    </div>
  )
}
