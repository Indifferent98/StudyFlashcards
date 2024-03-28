import { ChangeEvent, useState } from 'react'
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
} from '@/services/selectors'

import s from './Cards.module.scss'

import { CardsPageHeader } from './CardsPageHeader/CardsPageHeader'

export const Cards = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)

  const [url, setUrl] = useState(window.location.href)
  const lastPath = url.substring(url.lastIndexOf('/') + 1)
  const { data, isFetching, isLoading } = useGetCardsByIdQuery({
    currentPage,
    id: lastPath,
    itemsPerPage: pageSize,
  })

  const [searchTitle, setSearchTitle] = useState('')
  const changeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.currentTarget.value)
  }

  if (isLoading) {
    return <>Is loading...</>
  }

  return (
    <div className={s.header} style={{ marginTop: '55px' }}>
      <Table pagination={data!.pagination}>
        <CardsPageHeader id={lastPath} />
        <div style={{ marginBottom: '24px' }}>
          <Input
            fullWidth
            onChange={changeSearchTitle}
            placeholder={'Input search'}
            value={searchTitle}
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
          return (
            <TableItem
              answer={item.answer}
              answerImg={item.answerImg}
              changeSetting
              grade={'grade'}
              key={item.id}
              lastUpdated={new Date(item.updated).toLocaleDateString()}
              question={item.question}
              questionImg={item.questionImg}
            />
          )
        })}
      </Table>
    </div>
  )
}
