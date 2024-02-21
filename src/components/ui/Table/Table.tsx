import { Pagination } from '../Pagination'
import { TableItem } from './TableItem'
import s from './Table.module.scss'
export const Table = () => {
  return (
    <div>
      <div>
        <TableItem
          withImg={false}
          question="Question"
          answer="Answer"
          lastUpdated="Last Updated"
          grade="Grade"
        />
      </div>
      <TableItem withImg={true} lastUpdated="19.02.24" answer="helweoerw" />
      <TableItem withImg={true} lastUpdated="19.02.24" answer="helweoerw" />
      <TableItem withImg={false} lastUpdated="19.02.24" question="QWEQweqwqeQ" answer="helweoerw" />
      <TableItem withImg={true} lastUpdated="19.02.24" answer="helweoerw" />
      <TableItem withImg={false} lastUpdated="19.02.24" answer="helweoerw" question="safasfasafs" />
      <div className={s.Pagination}>
        <Pagination totalItems={205} />
      </div>
    </div>
  )
}
