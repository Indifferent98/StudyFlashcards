import { useSelector } from 'react-redux'

import { Typography } from '@/components/ui/Typography'
import { useGetDeckByIdQuery } from '@/services/api/decks.service'
import { selectRemoveDeckModalId } from '@/services/selectors'

export const DeleteDeck = () => {
  const removeDeckModalId = useSelector(selectRemoveDeckModalId)
  const { data, isLoading } = useGetDeckByIdQuery({ id: removeDeckModalId })

  if (isLoading) {
    return <> Loading...</>
  }

  return (
    <div style={{ marginTop: '24px' }}>
      Do you really want to remove{' '}
      <Typography
        children={`${data?.name}?`}
        style={{ display: 'inline-block' }}
        variant={'Subtitle1'}
      />
      <div>Deck will be deleted.</div>
    </div>
  )
}
