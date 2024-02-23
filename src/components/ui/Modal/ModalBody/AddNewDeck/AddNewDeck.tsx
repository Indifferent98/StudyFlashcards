import { ReactSVG } from 'react-svg'

import { Button } from '@/components/ui/Button'
import { SuperCheckBox } from '@/components/ui/CheckBox'
import { Input } from '@/components/ui/Input'
import UploadIcon from '@/img/UploadIcon.svg'

export const AddNewDeck = () => {
  return (
    <div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Input fullWidth helperMessage={'Name Pack'} style={{ backgroundColor: '#141414' }} />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Button
          children={
            <>
              <ReactSVG
                src={UploadIcon}
                style={{ display: 'inline-block', position: 'relative', top: '1px' }}
              />
              <span style={{ marginLeft: '8px' }}>Upload Image</span>
            </>
          }
          fullWidth
          height={'36px'}
          variant={'secondary'}
        />
      </div>
      <SuperCheckBox title={'Private pack'} />
    </div>
  )
}
