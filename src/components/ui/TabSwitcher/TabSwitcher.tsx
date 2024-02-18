import { ChangeEvent, useState, KeyboardEvent } from 'react'
import { Typography } from '../Typography'
import s from './TabSwitcher.module.scss'
export const TabSwitcher = () => {
  const [currentTab, setCurrentTab] = useState(1)
  const changeTab = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight' && currentTab === 0) {
      setCurrentTab(1)
    } else if (e.key === 'ArrowLeft' && currentTab === 1) {
      setCurrentTab(0)
    }
  }
  return (
    <div className={s.wrapper}>
      <div className={s.helperText}>
        <Typography variant="Body2" children={'Show decks cards'} />
      </div>
      <div>
        <button
          onKeyDown={changeTab}
          onClick={() => {
            setCurrentTab(0)
          }}
          className={`${s.button} ${currentTab === 0 ? s.activeTab : s.defaultTab} ${s.leftItem}`}
        >
          My cards
        </button>
        <button
          onKeyDown={changeTab}
          onClick={() => {
            setCurrentTab(1)
          }}
          className={`${s.button} ${currentTab === 1 ? s.activeTab : s.defaultTab} ${s.rightItem}`}
        >
          All Cards
        </button>
      </div>
    </div>
  )
}
