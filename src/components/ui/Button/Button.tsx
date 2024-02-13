import React from 'react'
import { ComponentPropsWithoutRef, ElementType } from 'react'
import LogOutIcon from '@/img/logOutIcon.svg'
// import { LogOutIcon } from '@/img/logOutIcon'

import s from './Button.module.scss'
import { ReactSVG } from 'react-svg'

type Props<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
  disabled?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth = false,
    variant = 'primary',
    withIcon = false,
    disabled = false,
    ...restProps
  } = props

  return (
    <Component
      children={
        <>
          {withIcon && (
            <ReactSVG
              src={LogOutIcon}
              className={`${s.logo} ${disabled ? s.disabledLogo : s.defaultLogo} ${
                Component === 'button' && s.button
              }`}
            />
          )}
          {props.children}
        </>
      }
      className={`${Component === 'button' && s.button} ${s[variant]} ${
        fullWidth ? s.fullWidth : ''
      } ${withIcon ? s.withIcon : s.withoutIcon}  ${className}`}
      {...restProps}
    />
  )
}
