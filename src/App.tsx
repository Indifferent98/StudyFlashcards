import React from 'react'

import { SuperSlider } from './components/ui/Slider/Slider'
import { SuperCheckBox } from './components/ui/CheckBox'
import { SettingsDropDown } from './components/ui/SettingsDropDown/SettingsDropDown'
import { Input } from './components/ui/Input'

export const App = () => {
  return (
    <div style={{ margin: '250px' }}>
      <div>hello</div>
      <SuperCheckBox title="hohhohooh" />
      <SuperCheckBox />
      <SuperSlider />

      <Input variant="search" disabled={true} />
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
