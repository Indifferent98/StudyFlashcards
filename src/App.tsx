import React from 'react'

import { SuperSlider } from './components/ui/Slider/Slider'
import { SuperCheckBox } from './components/ui/CheckBox'
import { DropDown } from './components/ui/dropDonwMenu'

export const App = () => {
  return (
    <div style={{ margin: '250px' }}>
      <div>hello</div>
      <SuperCheckBox title="hohhohooh" />
      <SuperCheckBox />
      <SuperSlider />
      <DropDown />
      <div>helo</div>
      <div>helo</div>
      <div>helo</div>
      <div>helo</div>
      <div>helo</div>
      <div>helo</div>
      <div>helo</div>
      <div>helo</div>
    </div>
  )
}
