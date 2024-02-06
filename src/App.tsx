import React from 'react'
import logOut from '@/img/logOut.svg'
import { PolymorphicButton } from './components/ui/PolymorphicButton'

export const App = () => {
  return (
    <div>
      <div style={{ margin: '20px' }}>
        <PolymorphicButton children={'Button Primary'} />
      </div>
      <div>
        <PolymorphicButton children={'Button Primary'} withIcon={true} />
      </div>
    </div>
  )
}
