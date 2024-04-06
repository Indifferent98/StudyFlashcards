import { useSelector } from 'react-redux'

import { Typography } from '@/components/ui/Typography'
import { useGetCardsByIdQuery, useGetDeckByIdQuery } from '@/services/api/decks.service'
import { selectCurrentCardId, selectRemoveDeckModalId } from '@/services/selectors'

type Props = {
  isCardVariant?: boolean
}
export const DeleteDeck = ({ isCardVariant = false }: Props) => {
  const removeDeckModalId = useSelector(selectRemoveDeckModalId)
  const { data, isLoading } = useGetDeckByIdQuery({ id: removeDeckModalId })

  if (isLoading) {
    return <> Loading...</>
  }

  return (
    <div style={{ marginTop: '24px' }}>
      Do you really want to remove{' '}
      <Typography
        children={`${isCardVariant ? 'card' : data?.name}?`}
        style={{ display: 'inline-block' }}
        variant={'Subtitle1'}
      />
      <div>{`${isCardVariant ? 'Card' : 'Deck'} will be deleted.`}</div>
    </div>
  )
}
