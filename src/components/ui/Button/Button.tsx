import React from 'react'
import { ComponentPropsWithoutRef, ElementType } from 'react'

import LogOutIcon from '@/img/logOutIcon.svg'
// import { LogOutIcon } from '@/img/logOutIcon'

import { ReactSVG } from 'react-svg'

import s from './Button.module.scss'

type Props<T extends ElementType> = {
  as?: T
  disabled?: boolean
  display?: 'inlineBlock'
  fullWidth?: boolean
  height?: string
  variant?: 'primary' | 'secondary'
  withIcon?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const {
    as: Component = 'button',
    children,
    className,
    disabled = false,
    display,
    fullWidth = false,
    height,
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
          <div className={s.childrenWrapper}>{props.children}</div>
        </>
      }
      className={`${Component === 'button' && s.button} ${s[variant]} ${
        fullWidth ? s.fullWidth : ''
      } ${withIcon ? s.withIcon : s.withoutIcon}  ${className} ${display && s.inlineBlock}`}
      {...restProps}
      disabled={disabled}
      style={{ height: `${height && height}` }}
    />
  )
}
