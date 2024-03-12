import { useSelector } from 'react-redux'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'

import { selectCurrentPage, selectPageSize } from '@/services/selectors/paginationSelectors'
import { Button } from '@/components/ui/Button'
import { useGetDecksQuery, useCreateDeckMutation } from '@/services/api/decks.service'

export const Decks = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)

  const { data, error, isFetching } = useGetDecksQuery({
    currentPage,
    itemsPerPage: pageSize,
  })

  const [createDeck, deckCreationStatus] = useCreateDeckMutation()

  if (error) {
    return <Typography variant={'H1'}>{JSON.stringify(error)}</Typography>
  }

  return isFetching ? (
    <Typography variant={'H1'}>...Loading</Typography>
  ) : (
    <div>
      <div>
        <Button
          children={'+'}
          onClick={() => {
            createDeck({ name: '6712qwe' })
          }}
          disabled={deckCreationStatus.isLoading}
        />
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
