import React from 'react'

import { Button } from './components/ui/Button'

export const App = () => {
  return (
    <div>
      <div style={{ margin: '20px' }}>
        <Button children={'Button Primary'} />
      </div>
      <div style={{ margin: '20px' }}>
        <Button children={<div>saasfas</div>} withIcon={true} />
      </div>
      <div></div>
      <h1>hello</h1>
      <h2>hello</h2>
      <h3>hello</h3>
      <h4>hello</h4>
    </div>
  )
}
