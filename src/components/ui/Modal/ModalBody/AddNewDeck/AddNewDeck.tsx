import { ChangeEvent } from 'react'
import { ReactSVG } from 'react-svg'

import { Button } from '@/components/ui/Button'
import { SuperCheckBox } from '@/components/ui/CheckBox'
import { Input } from '@/components/ui/Input'
import UploadIcon from '@/img/UploadIcon.svg'

type Props = {
  deckTitle: string
  isPrivatePack: boolean
  setDeckTitle: (title: string) => void
  setIsPrivatePack: (isPrivate: boolean) => void
  changeDeckMode?: boolean
}

export const AddNewDeck = ({
  deckTitle,
  isPrivatePack,
  setDeckTitle,
  setIsPrivatePack,
  changeDeckMode,
}: Props) => {
  const changeDeckTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setDeckTitle(e.currentTarget.value)
  }
  const changePrivateStatus = (checked: boolean) => {
    setIsPrivatePack(checked)
  }

  return (
    <div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Input
          fullWidth
          helperMessage={'Name Pack'}
          onChange={changeDeckTitle}
          style={{ backgroundColor: '#141414' }}
          value={deckTitle}
        />
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
      <SuperCheckBox
        checked={isPrivatePack}
        onValueChange={changePrivateStatus}
        title={'Private pack'}
      />
    </div>
  )
}
