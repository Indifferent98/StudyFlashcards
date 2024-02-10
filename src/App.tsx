import React from 'react'

import { SuperSlider } from './components/ui/Slider/Slider'
import { SuperCheckBox } from './components/ui/CheckBox'

export const App = () => {
  return (
    <div style={{ margin: '10px' }}>
      <div>hello</div>
      <SuperCheckBox title="hohhohooh" />
      <SuperCheckBox />
      <SuperSlider />
    </div>
  )
}
