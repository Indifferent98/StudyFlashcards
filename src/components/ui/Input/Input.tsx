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
    inputType === 'password' ? offEyeIcon : variant === 'search' ? closeIcon : eyeIcon
  const findItem = () => {}
  const clearInput = () => setValue('')
  const svgOnClick = disabled ? () => {} : variant === 'password' ? changeInputType : clearInput
  const [searchIconStyle, setSearchIconStyle] = useState<any>(s.searchUnfocused)

  const onfocus = () => {
    setSearchIconStyle(s.searchFocused)
  }
  const onBlur = () => {
    setSearchIconStyle(s.searchUnfocused)
  }
  return (
    <div className={s.wrapper}>
      {helperMessage && (
        <div className={s.top}>
          <Typography
            variant="Body2"
            children={helperMessage}
            className={s.helperText}
            color={disabled ? '#4C4C4C' : '#808080'}
          />
        </div>
      )}

      <input
        onFocus={onfocus}
        onBlur={onBlur}
        value={value}
        className={`${s[variant]} ${disabled ? s.disabled : errorMessage ? s.error : s.input} ${
          variant === 'search' || variant === 'password' ? s.withIcon : ''
        }`}
        disabled={disabled}
        type={inputType}
        onChange={changeValue}
        {...restProps}
      />
      {(variant === 'password' || (variant === 'search' && value && !disabled)) && (
        <ReactSVG
          src={currentImgSrc}
          className={disabled && variant !== 'search' ? s.svg2 : s.svg}
          onClick={svgOnClick}
        />
      )}
      {variant === 'search' && (
        <ReactSVG
          className={`${searchIconStyle} ${disabled ? s.disabledSearchIcon : s.searchIcon} `}
          src={searchIcon}
          onClick={findItem}
        />
      )}
      {/* <div className={s.svgFocused}>hello</div> */}
    </div>
  )
}
