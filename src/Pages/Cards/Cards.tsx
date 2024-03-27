import { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'

import { Input } from '@/components/ui/Input'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import leftArrow from '@/img/leftBigArrow.svg'
import { useGetCardsByIdQuery, useGetDeckByIdQuery } from '@/services/api'
import { selectCurrentPage, selectPageSize } from '@/services/selectors'

import s from './Cards.module.scss'
import { DropDown } from '@/components/ui/DropDown'

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
  const { data: deckData } = useGetDeckByIdQuery({ id: lastPath })
  const [searchTitle, setSearchTitle] = useState('')
  const changeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.currentTarget.value)
  }

  console.log(searchTitle)

  if (isLoading) {
    return <>Is loading...</>
  }

  return (
    <div className={s.header} style={{ marginTop: '55px' }}>
      <Table pagination={data!.pagination}>
        {/* <div style={{ marginLeft: '155px' }}>
          <DropDown variant="Settings" />
        </div> */}
        <Link style={{ padding: '0px 0px' }} to={'/'}>
          <ReactSVG src={leftArrow} /> Back to deck list
        </Link>
        <h1>{deckData?.name}</h1>
        {deckData?.cover && (
          <img src={deckData?.cover} style={{ width: '170px', height: '107px' }} />
        )}
        <Input
          fullWidth
          onChange={changeSearchTitle}
          value={searchTitle}
          variant={'search'}
          placeholder="Input search"
        />
        <TableItem
          answer={'Answer'}
          emptySlot
          grade={'grade'}
          isHeader
          lastUpdated={'Last Updated'}
          question={'Question'}
        />
        {data?.items.map(item => {
          return (
            <TableItem
              answerImg={item.answerImg}
              questionImg={item.questionImg}
              answer={item.answer}
              grade={'grade'}
              key={item.id}
              lastUpdated={new Date(item.updated).toLocaleDateString()}
              question={item.question}
            />
          )
        })}
      </Table>
    </div>
  )
}
