import React from 'react'

import { Select } from './components/ui/Select'
import { Button } from './components/ui/Button'
import { Pagination } from './components/ui/Pagination'

export const App = () => {
  return (
    <div>
      <Button children="heeee" />
      <div style={{ margin: '100px' }}>
        <Pagination />
        <div>hlelo</div>
      </div>
    </div>
  )
}
