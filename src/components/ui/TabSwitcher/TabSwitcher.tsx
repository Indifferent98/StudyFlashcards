import { ChangeEvent, KeyboardEvent, useState } from 'react'

import s from './TabSwitcher.module.scss'

import { Typography } from '../Typography'
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
        <Typography children={'Show decks cards'} variant={'Body2'} />
      </div>
      <div>
        <button
          className={`${s.button} ${currentTab === 0 ? s.activeTab : s.defaultTab} ${s.leftItem}`}
          onClick={() => {
            setCurrentTab(0)
          }}
          onKeyDown={changeTab}
        >
          My cards
        </button>
        <button
          className={`${s.button} ${currentTab === 1 ? s.activeTab : s.defaultTab} ${s.rightItem}`}
          onClick={() => {
            setCurrentTab(1)
          }}
          onKeyDown={changeTab}
        >
          All Cards
        </button>
      </div>
    </div>
  )
}
