import { ComponentPropsWithoutRef, ElementType } from 'react'
import React from 'react'

import s from './Typography.module.scss'

type TypographyVariant =
  | 'Body1'
  | 'Body2'
  | 'Caption'
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'Link1'
  | 'Link2'
  | 'Overline'
  | 'Subtitle1'
  | 'Subtitle2'

type Props<T extends ElementType> = {
  as?: T
  className?: any
  color?: string
  textColor?: 'dark' | 'light'
  variant: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'div'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const {
    as: Component = 'div',
    className,
    color = '',
    textColor = 'light',
    variant,
    ...restProps
  } = props

  return (
    <Component
      className={`${s[variant]} ${s[textColor]} ${className}`}
      style={{ color: color }}
      {...restProps}
    />
  )
}
