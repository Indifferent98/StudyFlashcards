import { pagination } from '@/services/flashcards.types'

import s from './Table.module.scss'

import { Pagination } from '../Pagination'
import { Typography } from '../Typography'

type Props = {
  children: React.ReactNode
  pagination: pagination
}

export const Table = ({ children, pagination }: Props) => {
  return (
    <div>
      {children}
      <div style={{ margin: '0 auto', width: '1006px' }}>
        <Typography style={{ float: 'right' }} variant={'Body2'}>
          Total items : {pagination.totalItems}
        </Typography>
      </div>
      <div className={s.Pagination}>
        <Pagination totalItems={pagination?.totalItems} />
      </div>
    </div>
  )
}
