import s from './Table.module.scss'

import { Pagination } from '../Pagination'
import { TableItem } from './TableItem'

type Props = {
  children: React.ReactNode
}

export const Table = ({ children }: Props) => {
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
        <Pagination totalItems={205} />
      </div>
    </div>
  )
}
