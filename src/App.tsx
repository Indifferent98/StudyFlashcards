import React from 'react'

import { Button } from './components/ui/Button'
import { Pagination } from './components/ui/Pagination'

export const App = () => {
  return (
    <div>
      <Button children={'heeee'} />
      <div style={{ margin: '100px' }}>
        <Pagination totalItems={101} />
        <div>hlelo</div>
      </div>
    </div>
  )
}
