import React from 'react'

import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './PolymorphicButton.module.scss'
import logOut from '@/img/logOut.svg'

type Props<T extends ElementType> = {
  as?: T
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const PolymorphicButton = <T extends ElementType = 'button'>(props: Props<T>) => {
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
          {withIcon && <img className={s.logo} src={logOut} />}
          {props.children}
        </>
      }
      {...restProps}
    />
  )
}
