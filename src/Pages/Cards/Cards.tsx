import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { useGetCardsByIdQuery, useGetDeckByIdQuery } from '@/services/api'
import { ChangeEvent, useState } from 'react'
import s from './Cards.module.scss'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import leftArrow from '@/img/leftBigArrow.svg'
import { Link } from 'react-router-dom'
import { ReactSVG } from 'react-svg'
import { useSelector } from 'react-redux'
import { selectCurrentPage, selectPageSize } from '@/services/selectors'

export const Cards = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)

  const [url, setUrl] = useState(window.location.href)
  let lastPath = url.substring(url.lastIndexOf('/') + 1)

  const { data, isLoading, isFetching } = useGetCardsByIdQuery({
    id: lastPath,
    currentPage,
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
        <Link to="/" style={{ padding: '0px 0px' }}>
          <ReactSVG src={leftArrow} /> Back to deck list
        </Link>
        <h1>{deckData?.name}</h1>
        <Input fullWidth variant="search" value={searchTitle} onChange={changeSearchTitle} />
        <TableItem
          question="Question"
          answer="Answer"
          lastUpdated={'Last Updated'}
          grade="grade"
          emptySlot
          isHeader
        />
        {data?.items.map(item => {
          return (
            <TableItem
              question={item.question}
              answer={item.answer}
              grade={'grade'}
              key={item.id}
              lastUpdated={new Date(item.updated).toLocaleDateString()}
            />
          )
        })}
      </Table>
    </div>
  )
}
