import { Button } from '@/components/ui/Button'
import { SuperCheckBox } from '@/components/ui/CheckBox'
import { Input } from '@/components/ui/Input'
import UploadIcon from '@/img/UploadIcon.svg'
import { ReactSVG } from 'react-svg'

export const AddNewDeck = () => {
  return (
    <div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Input helperMessage="Name Pack" fullWidth={true} style={{ backgroundColor: '#141414' }} />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Button
          fullWidth={true}
          variant="secondary"
          children={
            <>
              <ReactSVG src={UploadIcon} style={{ position: 'relative', top: '1px' }} />
              <span style={{ marginLeft: '8px' }}>Upload Image</span>
            </>
          }
          height="36px"
        />
      </div>
      <SuperCheckBox title="Private pack" />
    </div>
  )
}
