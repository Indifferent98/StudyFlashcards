import React from 'react'

import { Select } from './components/ui/Select'
import { Button } from './components/ui/Button'

export const App = () => {
  return (
    <div>
      <Button children="heeee" />
      <div style={{ margin: '100px' }}>
        <Select
          selectName="fruits"
          selectedItems={['banana', 'apple', 'pineapple', 'carrot', 'potato', 'cucumber']}
        />
        <div>hlelo</div>
      </div>
    </div>
  )
}
