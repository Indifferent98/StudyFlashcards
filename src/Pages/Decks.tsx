import { useSelector } from 'react-redux'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import {
  selectCurrentPage,
  selectMaxCards,
  selectMinCards,
  selectPageSize,
} from '@/services/selectors'
import { Button } from '@/components/ui/Button'
import { useGetDecksQuery, useCreateDeckMutation } from '@/services/api/decks.service'
import s from './decks.module.scss'
import { Input } from '@/components/ui/Input'
import { TabSwitcher } from '@/components/ui/TabSwitcher'
import { SuperSlider } from '@/components/ui/Slider'
import trashIcon from '@/img/trashIcon.svg'
import { ReactSVG } from 'react-svg'
import { filtersAction } from '@/services/slices/filterSlice'
import { useAppDispatch } from '@/services/hooks'

export const Decks = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)
  const minCards = useSelector(selectMinCards)
  const maxCards = useSelector(selectMaxCards)

  const { data, error, isFetching } = useGetDecksQuery({
    currentPage,
    itemsPerPage: pageSize,
    minCardsCount: minCards,
    maxCardsCount: maxCards,
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
          <SuperSlider range={[minCards, maxCards]} />
        </div>

        <div className={s.item}>
          <Button variant="secondary" onClick={() => dispatch(filtersAction.clearFilter())}>
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
