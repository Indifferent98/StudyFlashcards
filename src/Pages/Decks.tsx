import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import { useGetDecksQuery } from '@/services/api/base-api'
import { selectCurrentPage, selectPageSize } from '@/services/selectors/paginationSelectors'
import { paginationAction } from '@/services/slices/PaginationSlice'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Decks = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)

  const { isLoading, data, error, isFetching } = useGetDecksQuery({
    currentPage,
    itemsPerPage: pageSize,
  })

  if (error) {
    return <Typography variant="H1">{JSON.stringify(error)}</Typography>
  }

  return isFetching ? (
    <Typography variant="H1">...Loading</Typography>
  ) : (
    <div>
      <Table pagination={data!.pagination}>
        <TableItem
          isHeader
          name={'Name'}
          cardsCount={'Cards'}
          lastUpdated="Last Updated"
          createdBy="Created by"
          emptySlot
        />
        {data?.items.map(item => (
          <TableItem
            name={item.name}
            cardsCount={item.cardsCount}
            lastUpdated={new Date(item.updated).toLocaleDateString()}
            createdBy={item.author.name}
            key={item.id}
            changeSetting
          />
        ))}
      </Table>
    </div>
  )
}
