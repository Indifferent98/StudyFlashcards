import React from 'react'

import { RadioGroup } from './components/ui/RadioGroup'
import { Header } from './components/ui/Header'

export const App = () => {
  return (
    <div style={{ margin: '70px' }}>
      <Header />

      <RadioGroup disabled={false} />
    </div>
  )
}
