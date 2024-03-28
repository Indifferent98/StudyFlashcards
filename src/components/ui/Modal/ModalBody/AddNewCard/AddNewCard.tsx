import { ChangeEvent, useState } from 'react'
import { ReactSVG } from 'react-svg'

import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'
import UploadIcon from '@/img/UploadIcon.svg'

type Props = {
  answer: string
  changeAnswer: (e: ChangeEvent<HTMLInputElement>) => void
  changeQuestion: (e: ChangeEvent<HTMLInputElement>) => void
  question: string
}

export const AddNewCard = ({ answer, changeAnswer, changeQuestion, question }: Props) => {
  return (
    <div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Typography children={'Question:'} style={{ marginBottom: '12px' }} variant={'Subtitle2'} />
        <Input
          fullWidth
          helperMessage={'Question?'}
          onChange={changeQuestion}
          style={{ backgroundColor: '#141414' }}
          value={question}
        />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Button fullWidth height={'36px'} variant={'secondary'}>
          <>
            <ReactSVG
              src={UploadIcon}
              style={{ display: 'inline-block', position: 'relative', top: '1px' }}
            />
            <span style={{ marginLeft: '8px' }}>Change Image</span>
          </>
        </Button>
      </div>
      <div style={{ marginBottom: '24px', marginTop: '24px' }}>
        <Typography children={'Answer:'} style={{ marginBottom: '12px' }} variant={'Subtitle2'} />
        <Input
          fullWidth
          helperMessage={'Answer?'}
          onChange={changeAnswer}
          style={{ backgroundColor: '#141414' }}
          value={answer}
        />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Button fullWidth height={'36px'} variant={'secondary'}>
          <>
            <ReactSVG
              src={UploadIcon}
              style={{ display: 'inline-block', position: 'relative', top: '1px' }}
            />
            <span style={{ marginLeft: '8px' }}>Change Image</span>
          </>
        </Button>
      </div>
    </div>
  )
}
