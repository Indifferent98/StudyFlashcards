import s from './Table.module.scss'

import { Pagination } from '../Pagination'
import { pagination } from '@/services/flashcards.types'

type Props = {
  children: React.ReactNode
  pagination: pagination
  currentPage: number
  setCurrentPage: (page: number) => void
  pageSize: number
  setPageSize: (page: number) => void
}

export const Table = ({
  children,
  pagination,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}: Props) => {
  return (
    <div>
      {children}
      {/* <div>
        <TableItem
          answer={'Answer'}
          grade={'Grade'}
          lastUpdated={'Last Updated'}
          question={'Question'}
          withImg={false}
          emptySlot
        />
      </div>
      <TableItem answer={'helweoerw'} lastUpdated={'19.02.24'} withImg emptySlot />
      <TableItem answer={'helweoerw'} lastUpdated={'19.02.24'} withImg changeSetting />

      <TableItem
        answer={'helweoerw'}
        lastUpdated={'19.02.24'}
        question={'QWEQweqwqeQ'}
        withImg={false}
        changeSetting
      />
      <TableItem answer={'helweoerw'} lastUpdated={'19.02.24'} withImg emptySlot />
      <TableItem
        answer={'helweoerw'}
        lastUpdated={'19.02.24'}
        question={'safasfasafs'}
        withImg={false}
        emptySlot
      /> */}
      <div className={s.Pagination}>
        <Pagination
          pageSize={pageSize}
          setPageSize={setPageSize}
          totalItems={pagination?.totalItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}
