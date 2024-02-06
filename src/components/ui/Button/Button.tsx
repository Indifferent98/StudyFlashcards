import React from 'react'

import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './Button.module.scss'
import { LogOutIcon } from '@/img/logOutIcon/logOutIcon'

type Props<T extends ElementType> = {
  as?: T
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const {
    variant = 'primary',
    fullWidth = false,
    withIcon = false,
    as: Component = 'button',
    className,
    children,
    ...restProps
  } = props
  return (
    <Component
      className={`${Component === 'button' ? s[variant] : ''} ${fullWidth ? s.fullWidth : ''} ${
        withIcon ? s.withIcon : s.withoutIcon
      }  ${className}`}
      children={
        <>
          {withIcon && <LogOutIcon className={s.logo} disabled={props.disabled} />}
          {props.children}
        </>
      }
      {...restProps}
    />
  )
}
