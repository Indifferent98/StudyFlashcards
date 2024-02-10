import { ComponentPropsWithoutRef, ElementType } from 'react'
import React from 'react'
import s from './Typography.module.scss'

type TypographyVariant =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'Body1'
  | 'Subtitle1'
  | 'Body2'
  | 'Subtitle2'
  | 'Caption'
  | 'Overline'
  | 'Link1'
  | 'Link2'

type Props<T extends ElementType> = {
  as?: T
  textColor?: 'light' | 'dark'
  variant: TypographyVariant
  // className: any
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'div'>(
  props: Props<T> & Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>
) => {
  const { as: Component = 'div', variant, className, textColor = 'light', ...restProps } = props

  return <Component className={`${s[variant]} ${s[textColor]} ${className}`} {...restProps} />
}
