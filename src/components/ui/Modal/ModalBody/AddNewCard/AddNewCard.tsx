import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ReactSVG } from 'react-svg'
import UploadIcon from '@/img/UploadIcon.svg'
import { Typography } from '@/components/ui/Typography'

export const AddNewCard = () => {
  return (
    <div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Typography variant="Subtitle2" children={'Question:'} style={{ marginBottom: '12px' }} />
        <Input helperMessage="Question?" fullWidth={true} style={{ backgroundColor: '#141414' }} />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Button
          fullWidth={true}
          variant="secondary"
          children={
            <>
              <ReactSVG src={UploadIcon} style={{ position: 'relative', top: '1px' }} />
              <span style={{ marginLeft: '8px' }}>Change Image</span>
            </>
          }
          height="36px"
        />
      </div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Typography variant="Subtitle2" children={'Answer:'} style={{ marginBottom: '12px' }} />
        <Input helperMessage="Answer?" fullWidth={true} style={{ backgroundColor: '#141414' }} />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Button
          fullWidth={true}
          variant="secondary"
          children={
            <>
              <ReactSVG src={UploadIcon} style={{ position: 'relative', top: '1px' }} />
              <span style={{ marginLeft: '8px' }}>Change Image</span>
            </>
          }
          height="36px"
        />
      </div>
    </div>
  )
}
