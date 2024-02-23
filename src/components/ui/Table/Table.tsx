import s from './Table.module.scss'

import { Pagination } from '../Pagination'
import { TableItem } from './TableItem'
export const Table = () => {
  return (
    <div>
      <div>
        <TableItem
          answer={'Answer'}
          grade={'Grade'}
          lastUpdated={'Last Updated'}
          question={'Question'}
          withImg={false}
        />
      </div>
      <TableItem answer={'helweoerw'} lastUpdated={'19.02.24'} withImg />
      <TableItem answer={'helweoerw'} lastUpdated={'19.02.24'} withImg />
      <TableItem
        answer={'helweoerw'}
        lastUpdated={'19.02.24'}
        question={'QWEQweqwqeQ'}
        withImg={false}
      />
      <TableItem answer={'helweoerw'} lastUpdated={'19.02.24'} withImg />
      <TableItem
        answer={'helweoerw'}
        lastUpdated={'19.02.24'}
        question={'safasfasafs'}
        withImg={false}
      />
      <div className={s.Pagination}>
        <Pagination totalItems={205} />
      </div>
    </div>
  )
}
