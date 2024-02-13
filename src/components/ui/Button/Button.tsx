import React from 'react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import LogOutIcon from '@/img/logOutIcon.svg'
// import { LogOutIcon } from '@/img/logOutIcon'

import { ReactSVG } from 'react-svg'

import s from './Button.module.scss'

type Props<T extends ElementType> = {
  as?: T
  disabled?: boolean
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    disabled = false,
    fullWidth = false,
    variant = 'primary',
    withIcon = false,
    ...restProps
  } = props

  return (
    <Component
      children={
        <>
          {withIcon && (
            <ReactSVG
              className={`${s.logo} ${disabled ? s.disabledLogo : s.defaultLogo} ${
                Component === 'button' && s.button
              }`}
              src={LogOutIcon}
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
