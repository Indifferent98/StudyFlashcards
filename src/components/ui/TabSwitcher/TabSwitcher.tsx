import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'

import s from './TabSwitcher.module.scss'

import { Typography } from '../Typography'
import { useSelector } from 'react-redux'
import { selectTabs } from '@/services/selectors'
import { filtersAction } from '@/services/slices/filterSlice'
import { useAppDispatch } from '@/services/hooks'

export const TabSwitcher = () => {
  const tabs = useSelector(selectTabs)
  useEffect(() => {
    setCurrentTab(tabs === 'allCards' ? 1 : 0)
  }, [tabs])
  const [currentTab, setCurrentTab] = useState(tabs === 'allCards' ? 1 : 0)
  const { changeTabs } = filtersAction
  const dispatch = useAppDispatch()
  const changeTab = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight' && currentTab === 0) {
      setCurrentTab(1)
      dispatch(changeTabs({ tab: 'allCards' }))
    } else if (e.key === 'ArrowLeft' && currentTab === 1) {
      setCurrentTab(0)
      dispatch(changeTabs({ tab: 'myCards' }))
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
            dispatch(changeTabs({ tab: 'myCards' }))
          }}
          onKeyDown={changeTab}
        >
          My cards
        </button>
        <button
          className={`${s.button} ${currentTab === 1 ? s.activeTab : s.defaultTab} ${s.rightItem}`}
          onClick={() => {
            setCurrentTab(1)
            dispatch(changeTabs({ tab: 'allCards' }))
          }}
          onKeyDown={changeTab}
        >
          All Cards
        </button>
      </div>
    </div>
  )
}
