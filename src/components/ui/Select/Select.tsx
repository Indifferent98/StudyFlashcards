import { ReactSVG } from 'react-svg'
import { Typography } from '../Typography'
import s from './Select.module.scss'
import arrowUp from '@/img/arrowUpIcon.svg'
import arrowDown from '@/img/arrowDown.svg'
import { useEffect, useState, MouseEvent } from 'react'
type Props = {
  selectName: string
  helperText?: string
  selectedItems: string[]
}
export const Select = ({ selectName, helperText, selectedItems }: Props) => {
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

  console.log(showMode, '3')
  return (
    <div className={s.wrapper}>
      <button
        className={`${s.header} ${s.button} ${showMode ? s.buttonClose : s.buttonOpen}`}
        onClick={changeShowMode}
        onKeyDown={changeSelectItem}
        // onMouseMove={mouseMove}
      >
        <Typography variant="Body1" children={currentSelectedItem} as="span" />
        <ReactSVG src={showMode ? arrowDown : arrowUp} className={s.svg} />
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
