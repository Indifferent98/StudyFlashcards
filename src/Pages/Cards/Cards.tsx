import { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Input } from '@/components/ui/Input'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { useGetCardsByIdQuery } from '@/services/api'
import {
  selectBackGroundDarkMode,
  selectCurrentModal,
  selectCurrentPage,
  selectPageSize,
  selectRemoveDeckModalId,
  selectSearchValue,
} from '@/services/selectors'

import s from './Cards.module.scss'

import { CardsPageHeader } from './CardsPageHeader/CardsPageHeader'
import { Modal } from '@/components/ui/Modal'
import { appAction } from '@/services/slices/appSlice'
import { filtersAction } from '@/services/slices/filterSlice'
import { useAppDispatch } from '@/services/hooks'
import { paginationAction } from '@/services/slices/PaginationSlice'

export const Cards = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)
  const searchItem = useSelector(selectSearchValue)
  const [url, setUrl] = useState(window.location.href)
  const lastPath = url.substring(url.lastIndexOf('/') + 1)
  const { changeCurrentPage } = paginationAction
  const { data, isFetching, isLoading } = useGetCardsByIdQuery({
    currentPage,
    id: lastPath,
    itemsPerPage: pageSize,
    question: searchItem,
  })

  const dispatch = useAppDispatch()
  const { changeSearchValue } = filtersAction
  const backGroundDarkMode = useSelector(selectBackGroundDarkMode)
  const currentModal = useSelector(selectCurrentModal)
  const [searchValue, setSearchValue] = useState('')
  const [timerId, setTimerId] = useState<any>()
  const changeSearchParams = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value)
  }

  useEffect(() => {
    if (searchItem === '') {
      setSearchValue('')
    }
  }, [searchItem])

  useEffect(() => {
    clearTimeout(timerId)
    setTimerId(
      setTimeout(() => {
        dispatch(changeCurrentPage({ newPage: 1 }))
        dispatch(changeSearchValue({ value: searchValue }))
      }, 800)
    )
  }, [searchValue])

  const changeInputParams = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchValue({ value: e.currentTarget.value }))
  }
  if (isLoading) {
    return <>Is loading...</>
  }

  return (
    <div className={s.header} style={{ marginTop: '55px' }}>
      {backGroundDarkMode && (
        <>
          <div className={s.background}></div> <Modal variant={currentModal} />
        </>
      )}
      <Table pagination={data!.pagination}>
        <CardsPageHeader id={lastPath} />
        <div style={{ marginBottom: '24px' }}>
          <Input
            fullWidth
            onChange={changeSearchParams}
            placeholder={'Input search'}
            value={searchValue}
            variant={'search'}
          />
        </div>
        <TableItem
          answer={'Answer'}
          emptySlot
          grade={'Grade'}
          isHeader
          lastUpdated={'Last Updated'}
          question={'Question'}
        />
        {data?.items.map(item => {
          const { answer, answerImg, grade, id, question, questionImg, updated, userId } = item
          const lastUpdate = new Date(updated).toLocaleDateString()

          return (
            <TableItem
              deckId={lastPath}
              answer={answer}
              answerImg={answerImg}
              authorId={userId}
              cardId={id}
              changeSetting
              grade={'grade'}
              gradeMark={grade}
              key={id}
              lastUpdated={lastUpdate}
              question={question}
              questionImg={questionImg}
              removeVariant={'card'}
              settingVariant={'changeCard'}
            />
          )
        })}
      </Table>
    </div>
  )
}
