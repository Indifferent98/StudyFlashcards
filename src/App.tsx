import React from 'react'
import eyeLogo from '@/img/eye-outline.svg'
import { Button } from './components/ui/Button'
import { Input } from './components/ui/Input'

export const App = () => {
  return (
    <div>
      <div style={{ margin: '20px' }}>
        <Button children={<div>saasfas</div>} withIcon={true} />
      </div>
      <div style={{ margin: '20px' }}>
        <Input helperMessage="12312" />
      </div>

      <div style={{ margin: '20px' }}>
        <img src={eyeLogo} alt="" />
      </div>
    </div>
  )
}
