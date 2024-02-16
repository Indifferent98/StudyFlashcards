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
      {/* <div style={{ display: 'flex' }}>
        <button
          style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid red',
          }}
        >
          <div>10</div>
        </button>
        <button
          style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid red',
          }}
        >
          <div>10</div>
        </button>
      </div> */}
    </div>
  )
}
