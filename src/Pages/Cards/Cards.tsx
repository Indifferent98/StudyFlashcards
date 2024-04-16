import { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'

import { Input } from '@/components/ui/Input'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { useGetCardsByIdQuery } from '@/services/api'
import { selectCurrentPage, selectPageSize } from '@/services/selectors'

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
          const { answer, answerImg, grade, id, question, questionImg, updated, userId } = item

          console.log(id)
          const lastUpdate = new Date(updated).toLocaleDateString()

          return (
            <TableItem
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
