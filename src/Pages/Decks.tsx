import { useSelector } from 'react-redux'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/api/base-api'
import { selectCurrentPage, selectPageSize } from '@/services/selectors/paginationSelectors'
import { Button } from '@/components/ui/Button'

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
      <div></div>
      <Button
        children={'+'}
        onClick={() => {
          createDeck({ name: 'newDeck3' })
        }}
        disabled={deckCreationStatus.isLoading}
      />
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
