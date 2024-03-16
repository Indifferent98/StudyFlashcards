import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ReactSVG } from 'react-svg'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { SuperSlider } from '@/components/ui/Slider'
import { TabSwitcher } from '@/components/ui/TabSwitcher'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import trashIcon from '@/img/trashIcon.svg'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/api/decks.service'
import { useAppDispatch } from '@/services/hooks'
import {
  selectCurrentPage,
  selectMaxCards,
  selectMinCards,
  selectPageSize,
  selectTabs,
} from '@/services/selectors'
import { paginationAction } from '@/services/slices/PaginationSlice'
import { filtersAction } from '@/services/slices/filterSlice'

import s from './decks.module.scss'

export const Decks = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)
  const minCards = useSelector(selectMinCards)
  const maxCards = useSelector(selectMaxCards)
  const { resetPagination } = paginationAction
  const tabs = useSelector(selectTabs)
  const { data, error, isFetching } = useGetDecksQuery({
    authorId: tabs === 'myCards' ? 'f2be95b9-4d07-4751-a775-bd612fc9553a' : '',
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
  })
  const dispatch = useAppDispatch()
  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  console.log([minCards, maxCards])

  if (error) {
    return <Typography variant={'H1'}>{JSON.stringify(error)}</Typography>
  }

  return isFetching ? (
    <Typography variant={'H1'}>...Loading</Typography>
  ) : (
    <div style={{ marginTop: '33px' }}>
      <div className={s.header}>
        <Button
          children={'+'}
          disabled={deckCreationStatus.isLoading}
          onClick={() => {
            createDeck({ name: 'kukusDeck?' })
          }}
        />
        <Typography as={'span'} variant={'H1'}>
          Deck list
        </Typography>
        <Button display={'inlineBlock'}>Add new Deck</Button>
      </div>
      <div className={s.body}>
        <div className={s.item}>
          <Input placeholder={'Input search'} value={'searchTitle'} variant={'search'} />
        </div>
        <TabSwitcher />
        <div className={s.item}>
          <SuperSlider range={[minCards, maxCards]} />
        </div>

        <div className={s.item}>
          <Button
            onClick={() => {
              dispatch(filtersAction.clearFilter())
              dispatch(resetPagination())
            }}
            variant={'secondary'}
          >
            <ReactSVG src={trashIcon} style={{ display: 'inline-block' }} /> Clear Filter
          </Button>
        </div>
      </div>
      <Table pagination={data!.pagination}>
        <TableItem
          cardsCount={'Cards'}
          createdBy={'Created by'}
          emptySlot
          isHeader
          lastUpdated={'Last Updated'}
          name={'Name'}
        />
        {data?.items.map(item => (
          <TableItem
            authorId={item.userId}
            cardsCount={item.cardsCount}
            changeSetting
            createdBy={item.author.name}
            key={item.id}
            lastUpdated={new Date(item.updated).toLocaleDateString()}
            name={item.name}
          />
        ))}
      </Table>
    </div>
  )
}
