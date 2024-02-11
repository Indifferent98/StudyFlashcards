import React from 'react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import { LogOutIcon } from '@/img/logOutIcon/logOutIcon'

import s from './Button.module.scss'

type Props<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth = false,
    variant = 'primary',
    withIcon = false,
    ...restProps
  } = props

  return (
    <Component
      children={
        <>
          {withIcon && <LogOutIcon className={s.logo} disabled={props.disabled} />}
          {props.children}
        </>
      }
      className={`${Component === 'button' ? s[variant] : ''} ${fullWidth ? s.fullWidth : ''} ${
        withIcon ? s.withIcon : s.withoutIcon
      }  ${className}`}
      {...restProps}
    />
  )
}
