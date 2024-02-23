import { Typography } from '@/components/ui/Typography'
type Props = {
  cardName: string
}
export const DeleteCard = ({ cardName }: Props) => {
  return (
    <div style={{ marginTop: '24px' }}>
      Do you really want to remove{' '}
      <Typography
        children={`${cardName}?`}
        style={{ display: 'inline-block' }}
        variant={'Subtitle1'}
      />
      <div>All card will be deleted.</div>
    </div>
  )
}
