import React, { ChangeEvent, ComponentPropsWithoutRef, useState } from 'react'
import { Typography } from '../Typography'
import s from './Input.module.scss'
import eyeIcon from '@/img/eye-outline.svg'
import offEyeIcon from '@/img/eye-off-outline.svg'
import searchIcon from '@/img/searchIcon.svg'
import closeIcon from '@/img/closeIcon.svg'
import { ReactSVG } from 'react-svg'

type Props = {
  helperMessage?: string
  errorMessage?: string | null
  variant?: 'default' | 'password' | 'search'
  fullWidth?: boolean
  disabled?: boolean
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  helperMessage,
  errorMessage,
  variant = 'default',
  fullWidth = false,
  disabled = false,
  ...restProps
}: Props) => {
  const [inputType, setInputType] = useState<string>('text')
  const [value, setValue] = useState('')
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

  const changeInputType = () => setInputType(inputType === 'text' ? 'password' : 'text')

  const currentImgSrc =
    variant === 'password' ? offEyeIcon : variant === 'search' ? closeIcon : eyeIcon
  const findItem = () => {}
  const clearInput = () => setValue('')
  const svgOnClick = disabled ? () => {} : variant === 'password' ? changeInputType : clearInput

  return (
    <div className={s.wrapper}>
      {helperMessage && (
        <div className={s.top}>
          <Typography
            variant="Body2"
            children={helperMessage}
            className={disabled ? s.disbaledHelperText : s.helperText}
          />
        </div>
      )}

      <input
        value={value}
        className={`${s[variant]} ${disabled ? s.disabled : errorMessage ? s.error : s.input} ${
          variant === 'search' || variant === 'password' ? s.withIcon : ''
        }`}
        disabled={disabled}
        type={inputType}
        onChange={changeValue}
        {...restProps}
      />
      {(variant === 'password' || (variant === 'search' && value)) && (
        <ReactSVG src={currentImgSrc} className={disabled ? s.svg2 : s.svg} onClick={svgOnClick} />
      )}
      {variant === 'search' && (
        <ReactSVG src={searchIcon} className={!disabled ? s.searchIcon : ''} onClick={findItem} />
      )}
    </div>
  )
}
