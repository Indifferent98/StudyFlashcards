import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/services/hooks'
import { selectTabs } from '@/services/selectors'
import { paginationAction } from '@/services/slices/PaginationSlice'
import { filtersAction } from '@/services/slices/filterSlice'

import s from './TabSwitcher.module.scss'

import { Typography } from '../Typography'

export const TabSwitcher = () => {
  const tabs = useSelector(selectTabs)

  useEffect(() => {
    setCurrentTab(tabs === 'allCards' ? 1 : 0)
  }, [tabs])
  const [currentTab, setCurrentTab] = useState(tabs === 'allCards' ? 1 : 0)
  const { changeTabs } = filtersAction
  const { changeCurrentPage } = paginationAction
  const dispatch = useAppDispatch()
  const changeTab = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight' && currentTab === 0) {
      setCurrentTab(1)
      dispatch(changeTabs({ tab: 'allCards' }))
    } else if (e.key === 'ArrowLeft' && currentTab === 1) {
      setCurrentTab(0)
      dispatch(changeTabs({ tab: 'myCards' }))
      dispatch(changeCurrentPage({ newPage: 1 }))
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
            dispatch(changeCurrentPage({ newPage: 1 }))
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
