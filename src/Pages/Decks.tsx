import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { useGetDecksQuery } from '@/services/api/base-api'

export const Decks = () => {
  const query = useGetDecksQuery()

  console.log(query)

  return (
    <div>
      <Table>
        <TableItem
          isHeader
          name={'Name'}
          cardsCount={'Cards'}
          lastUpdated="Last Updated"
          createdBy="Created by"
          emptySlot
        />
        {query.data?.items.map(item => (
          <TableItem
            name={item.name}
            cardsCount={item.cardsCount}
            lastUpdated={new Date(item.updated).toLocaleDateString()}
            createdBy={item.author.name}
            changeSetting
          />
        ))}
      </Table>
    </div>
  )
}
