import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import { useGetDecksQuery } from '@/services/api/base-api'
import { useState } from 'react'

export const Decks = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
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
      <Table
        pageSize={pageSize}
        setPageSize={setPageSize}
        pagination={data!.pagination}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      >
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
