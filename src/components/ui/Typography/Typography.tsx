import { ComponentPropsWithoutRef, ElementType } from 'react'

type TypographyVariant = 'H1' | 'H2' | 'H3' | 'H4'
type Props<T extends ElementType> = {
  as?: T
  // variant: TypographyVariant
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'div'>(props: Props<T>) => {
  const { as: Component = 'div', ...restProps } = props

  return <Component {...restProps} />
}
