import { useSelector } from 'react-redux'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import { selectCurrentPage, selectPageSize } from '@/services/selectors/paginationSelectors'
import { Button } from '@/components/ui/Button'
import { useGetDecksQuery, useCreateDeckMutation } from '@/services/api/decks.service'
import s from './decks.module.scss'
import { Input } from '@/components/ui/Input'
import { TabSwitcher } from '@/components/ui/TabSwitcher'
import { SuperSlider } from '@/components/ui/Slider'
import trashIcon from '@/img/trashIcon.svg'
import { ReactSVG } from 'react-svg'

export const Decks = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)

  const { data, error, isFetching } = useGetDecksQuery({
    currentPage,
    itemsPerPage: pageSize,
  })
  // const maxCardCount = data?.items.sort((a, b) => b.cardsCount - a.cardsCount)[0]

  const [createDeck, deckCreationStatus] = useCreateDeckMutation()
  console.log(data)
  if (error) {
    return <Typography variant={'H1'}>{JSON.stringify(error)}</Typography>
  }

  return isFetching ? (
    <Typography variant={'H1'}>...Loading</Typography>
  ) : (
    <div style={{ marginTop: '33px' }}>
      <div className={s.header}>
        {/* <Button
          children={'+'}
          onClick={() => {
            createDeck({ name: '6712qwe' })
          }}
          disabled={deckCreationStatus.isLoading}
        /> */}
        <Typography variant="H1" as="span">
          Deck list
        </Typography>
        <Button display="inlineBlock">Add new Deck</Button>
      </div>
      <div className={s.body}>
        <div className={s.item}>
          <Input placeholder="Input search" variant="search" />
        </div>

        <TabSwitcher />
        <div className={s.item}>
          {/* <SuperSlider range={[0, maxCardCount!.cardsCount ? maxCardCount!.cardsCount : 100]} /> */}
        </div>

        <div className={s.item}>
          <Button variant="secondary">
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
            cardsCount={item.cardsCount}
            changeSetting
            createdBy={item.author.name}
            authorId={item.userId}
            key={item.id}
            lastUpdated={new Date(item.updated).toLocaleDateString()}
            name={item.name}
          />
        ))}
      </Table>
    </div>
  )
}
