import { ReactSVG } from 'react-svg'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import UploadIcon from '@/img/UploadIcon.svg'

export const AddNewCard = () => {
  return (
    <div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Typography children={'Question:'} style={{ marginBottom: '12px' }} variant={'Subtitle2'} />
        <Input fullWidth helperMessage={'Question?'} style={{ backgroundColor: '#141414' }} />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Button
          children={
            <>
              <ReactSVG
                src={UploadIcon}
                style={{ display: 'inline-block', position: 'relative', top: '1px' }}
              />
              <span style={{ marginLeft: '8px' }}>Change Image</span>
            </>
          }
          fullWidth
          height={'36px'}
          variant={'secondary'}
        />
      </div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Typography children={'Answer:'} style={{ marginBottom: '12px' }} variant={'Subtitle2'} />
        <Input fullWidth helperMessage={'Answer?'} style={{ backgroundColor: '#141414' }} />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Button
          children={
            <>
              <ReactSVG
                src={UploadIcon}
                style={{ display: 'inline-block', position: 'relative', top: '1px' }}
              />
              <span style={{ marginLeft: '8px' }}>Change Image</span>
            </>
          }
          fullWidth
          height={'36px'}
          variant={'secondary'}
        />
      </div>
    </div>
  )
}
