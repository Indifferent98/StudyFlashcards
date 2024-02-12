import React from 'react'

import { SuperCheckBox } from './components/ui/CheckBox'
import { Input } from './components/ui/Input'
import { DropDown } from './components/ui/DropDown/DropDown'
import { SuperSlider } from './components/ui/Slider/Slider'

export const App = () => {
  return (
    <>
      <div style={{ marginLeft: '300px', marginTop: '100px' }}>
        <DropDown variant="Profile" />
      </div>
      <div style={{ margin: '100px' }}>
        {' '}
        <DropDown variant="Settings" />
      </div>
      <div style={{ margin: '100px' }}>
        <SuperSlider />
      </div>
      <div style={{ margin: '100px' }}>
        <Input />
      </div>
      <div style={{ margin: '100px' }}>
        <SuperCheckBox />
      </div>
      <div style={{ margin: '100px' }}>
        <SuperCheckBox title="hello" />
      </div>
      <div style={{ margin: '100px' }}>
        <Input variant="search" />
      </div>
      <div style={{ margin: '100px' }}>
        <Input variant="password" />
      </div>
      <div style={{ margin: '100px' }}></div>
    </>
  )
}
