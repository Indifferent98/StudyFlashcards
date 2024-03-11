import { pagination } from '@/services/flashcards.types'

import s from './Table.module.scss'

import { Pagination } from '../Pagination'

type Props = {
  children: React.ReactNode
  pagination: pagination
}

export const Table = ({ children, pagination }: Props) => {
  return (
    <div>
      {children}
      <div className={s.Pagination}>
        <Pagination totalItems={pagination?.totalItems} />
      </div>
    </div>
  )
}
