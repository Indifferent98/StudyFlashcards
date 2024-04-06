import { useSelector } from 'react-redux'

import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { Table } from '@/components/ui/Table'
import { TableItem } from '@/components/ui/Table/TableItem'
import { Typography } from '@/components/ui/Typography'
import { useGetDecksQuery } from '@/services/api/decks.service'
import { useAppDispatch } from '@/services/hooks'
import {
  selectBackGroundDarkMode,
  selectCurrentModal,
  selectCurrentPage,
  selectMaxCards,
  selectMinCards,
  selectOrderBy,
  selectPageSize,
  selectSearchValue,
  selectTabs,
} from '@/services/selectors'
import { appAction } from '@/services/slices/appSlice'

import s from './decks.module.scss'

import { DecksNavigate } from './decksNavigate'

export const Decks = () => {
  const currentPage = useSelector(selectCurrentPage)
  const pageSize = useSelector(selectPageSize)
  const minCards = useSelector(selectMinCards)
  const maxCards = useSelector(selectMaxCards)
  const searchValue = useSelector(selectSearchValue)
  const tabs = useSelector(selectTabs)
  const orderBy = useSelector(selectOrderBy)

  const { data, error, isFetching, isLoading } = useGetDecksQuery({
    authorId: tabs === 'myCards' ? 'f2be95b9-4d07-4751-a775-bd612fc9553a' : '',
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name: searchValue,
    orderBy: orderBy,
  })
  const backGroundDarkMode = useSelector(selectBackGroundDarkMode)
  const currentModal = useSelector(selectCurrentModal)
  const { changeBackGroundDarkMode, changeCurrentModal } = appAction
  const dispatch = useAppDispatch()

  if (error) {
    return <Typography variant={'H1'}>{JSON.stringify(error)}</Typography>
  }

  if (isLoading) {
    return <Typography variant={'H1'}>...Loading</Typography>
  }

  // console.log(data?.items.map(t => t.cover))

  return (
    <div style={{ marginTop: '33px' }}>
      {backGroundDarkMode && (
        <>
          <div className={s.background}></div> <Modal variant={currentModal} />
        </>
      )}
      <div className={s.header}>
        <Typography as={'span'} variant={'H1'}>
          Deck list
        </Typography>
        <Button
          display={'inlineBlock'}
          onClick={() => {
            dispatch(changeBackGroundDarkMode({ mode: true }))
            dispatch(changeCurrentModal({ variant: 'Add New Deck' }))
          }}
        >
          Add new Deck
        </Button>
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
        {data?.items.map(item => {
          return (
            <TableItem
              authorId={item.userId}
              cardsCount={item.cardsCount}
              changeSetting
              createdBy={item.author.name}
              deckId={item.id}
              key={item.id}
              lastUpdated={new Date(item.updated).toLocaleDateString()}
              name={item.name}
              settingVariant="changeDeck"
              removeVariant="deck"
            />
          )
        })}
      </Table>
    </div>
  )
}
