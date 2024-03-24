import React, { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import { ReactSVG } from 'react-svg'

import closeIcon from '@/img/closeIcon.svg'
import offEyeIcon from '@/img/eye-off-outline.svg'
import eyeIcon from '@/img/eye-outline.svg'
import searchIcon from '@/img/searchIcon.svg'

import s from './Input.module.scss'

import { Typography } from '../Typography'

export type InputVariant = 'default' | 'password' | 'search'

type Props = {
  disabled?: boolean
  errorMessage?: null | string
  fullWidth?: boolean
  helperMessage?: string
  variant?: InputVariant
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled = false,
      errorMessage,
      fullWidth = false,
      helperMessage,
      variant = 'default',
      ...restProps
    },
    ref
  ) => {
    const [inputType, setInputType] = useState<string>(
      variant === 'default' ? 'text' : variant === 'search' ? 'text' : 'password'
    )

    const changeInputType = () => setInputType(inputType === 'text' ? 'password' : 'text')
    const currentImgSrc =
      inputType === 'password' ? eyeIcon : variant === 'search' ? closeIcon : offEyeIcon

    const findItem = () => {}
    const clearInput = () => {
      if (restProps.onChange) {
        restProps.onChange({ currentTarget: { value: '' } } as ChangeEvent<HTMLInputElement>)
      }
    }
    const svgOnClick = disabled ? () => {} : variant === 'password' ? changeInputType : clearInput
    const [searchIconStyle, setSearchIconStyle] = useState<any>(s.searchUnfocused)

    return (
      <div className={`${s.wrapper} ${fullWidth && s.fullWidth}`}>
        {helperMessage && (
          <div className={s.top}>
            <Typography
              children={helperMessage}
              className={s.helperText}
              color={disabled ? '#4C4C4C' : '#808080'}
              variant={'Body2'}
            />
          </div>
        )}
        {/* <img src={currentImgSrc} style={{ fill: 'white' }} /> */}
        <input
          className={`${s[variant]} ${disabled ? s.disabled : errorMessage ? s.error : s.input} ${
            variant === 'search' || variant === 'password' ? s.withIcon : ''
          } ${fullWidth && s.fullWidth}`}
          disabled={disabled}
          type={inputType}
          {...restProps}
        />
        {(variant === 'password' || (variant === 'search' && restProps.value && !disabled)) && (
          <ReactSVG
            className={disabled && variant !== 'search' ? s.svg2 : s.svg}
            onClick={svgOnClick}
            src={currentImgSrc}
          />
        )}
        {variant === 'search' && (
          <ReactSVG
            className={`${searchIconStyle} ${disabled ? s.disabledSearchIcon : s.searchIcon} `}
            onClick={findItem}
            src={searchIcon}
          />
        )}
        <div>
          <Typography color={'#F23D61'} variant={'Caption'}>
            {errorMessage}
          </Typography>
        </div>
      </div>
    )
  }
)
