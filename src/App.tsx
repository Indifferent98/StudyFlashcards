import React from 'react'

import { SuperCheckBox } from './components/ui/CheckBox'
import { Input } from './components/ui/Input'
import { DropDown } from './components/ui/DropDown/DropDown'
import { SuperSlider } from './components/ui/Slider/Slider'

export const App = () => {
  return (
    <div style={{ margin: '250px' }}>
      <div>hello</div>
      <SuperCheckBox title={'hohhohooh'} />
      <SuperCheckBox />
      <SuperSlider />

      <Input disabled variant={'search'} />
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
