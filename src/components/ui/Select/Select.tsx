import { ComponentPropsWithoutRef, MouseEvent, useEffect, useState } from 'react'
import { ReactSVG } from 'react-svg'

import arrowDown from '@/img/arrowDown.svg'
import arrowUp from '@/img/arrowUpIcon.svg'

import s from './Select.module.scss'

import { Typography } from '../Typography'
type Props = {
  helperText?: string
  isInlineBlock?: boolean
  pixelWidth?: number
  selectName: string | number
  selectedItems: string[]
  size?: 'small'
  width?: 'default' | 'fullWidth' | 'max-content'
  setChooseItem?: (page: number) => void
} & ComponentPropsWithoutRef<'div'>
export const Select = (props: Props) => {
  const {
    helperText,
    isInlineBlock = false,
    selectName,
    selectedItems,
    size,
    width = 'default',
    setChooseItem,
    ...restProps
  } = props

  const changeSelectItem = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (showMode && e.key === 'ArrowDown' && !(hoveredItem >= selectedItems.length - 1)) {
      setHoveredItem(hoveredItem + 1)
      setCurrentSelectedItem(selectedItems[hoveredItem + 1])
    } else if (showMode && e.key === 'ArrowUp' && hoveredItem > 0) {
      setHoveredItem(hoveredItem - 1)
      setCurrentSelectedItem(selectedItems[hoveredItem - 1])
    }
    if (showMode && e.key === 'Enter') {
      setCurrentSelectedItem(selectedItems[hoveredItem])
    }
  }

  const closeDropDownSelectMenu = () => {
    setShowMode(false)
  }

  useEffect(() => {
    window.addEventListener('click', closeDropDownSelectMenu)
    return () => window.removeEventListener('click', closeDropDownSelectMenu)
  }, [])

  const [showMode, setShowMode] = useState(false)
  const [currentSelectedItem, setCurrentSelectedItem] = useState(selectName)
  const [hoveredItem, setHoveredItem] = useState(-1)
  const changeShowMode = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setShowMode(showMode ? false : true)
  }
  const chooseItem = (item: number) => {
    setChooseItem && setChooseItem(item)
  }

  return (
    <div
      className={`${s.wrapper} ${isInlineBlock && s.inlineDiv} ${
        width === 'fullWidth' ? s.fullWidth : width === 'max-content' ? s.maxContent : ''
      } ${size === 'small' && s.small}`}
      {...restProps}
    >
      {<Typography children={helperText} color={'#808080'} variant={'Body2'} />}
      <button
        className={` ${s.header} ${s.button} ${showMode ? s.buttonClose : s.buttonOpen} ${
          size === 'small' && s.smallButton
        }`}
        onClick={changeShowMode}
        onKeyDown={changeSelectItem}
      >
        <Typography
          as={'span'}
          children={currentSelectedItem}
          style={{ paddingRight: '5px' }}
          variant={'Body1'}
        />
        <ReactSVG className={s.svg} src={showMode ? arrowDown : arrowUp} />
      </button>
      {showMode && (
        <div className={s.test}>
          {selectedItems.map((item, i) => {
            const hoverItem = () => {
              setHoveredItem(i)
            }
            const selectOption = (e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation()
              setCurrentSelectedItem(item)
              setShowMode(false)
              setChooseItem && setChooseItem(+item)
            }

            return (
              <div
                className={`${s.item} ${hoveredItem === i && s.hoveredItem}`}
                onClick={selectOption}
                onMouseMove={hoverItem}
              >
                {item}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
