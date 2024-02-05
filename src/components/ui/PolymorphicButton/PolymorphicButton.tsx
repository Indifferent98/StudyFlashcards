import React, { ComponentPropsWithoutRef } from 'react'
import s from './PolymorphicButton.module.scss'

type Props = {
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const PolymorphicButton = ({
  variant = 'primary',
  fullWidth = false,
  withIcon = false,
  className,
  ...restProps
}: Props) => {
  return (
    <button
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      {...restProps}
    />
  )
}
