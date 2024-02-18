import React from 'react'

import { RadioGroup } from './components/ui/RadioGroup'
import { Header } from './components/ui/Header'
import { TabSwitcher } from './components/ui/TabSwitcher'
import { Select } from './components/ui/Select'

export const App = () => {
  return (
    <div>
      <Header />

      <div style={{ margin: '70px' }}>
        <TabSwitcher />
      </div>

      <div>
        <Select selectedItems={['234234', '223434', '2', 'aqweqweq']} selectName={'tutle'} />
      </div>
    </div>
  )
}
