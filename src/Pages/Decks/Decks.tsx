import { useSelector } from 'react-redux'

import { Button } from '@/components/ui/Button'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/api/decks.service'
import {
  selectCurrentPage,
  selectMaxCards,
  selectMinCards,
  selectPageSize,
  selectTabs,
} from '@/services/selectors'

import s from './decks.module.scss'

import { DecksNavigate } from './decksNavigate'

export const Decks = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)
  const minCards = useSelector(selectMinCards)
  const maxCards = useSelector(selectMaxCards)

  const tabs = useSelector(selectTabs)
  const { data, error, isFetching, isLoading } = useGetDecksQuery({
    authorId: tabs === 'myCards' ? 'f2be95b9-4d07-4751-a775-bd612fc9553a' : '',
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
  })

  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  if (error) {
    return <Typography variant={'H1'}>{JSON.stringify(error)}</Typography>
  }

  return isLoading ? (
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
      <DecksNavigate />
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
