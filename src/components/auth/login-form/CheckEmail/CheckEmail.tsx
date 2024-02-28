import { ReactSVG } from 'react-svg'

import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import emailIcon from '@/img/emailIcon.svg'

export const CheckEmail = () => {
  return (
    <>
      <div style={{ marginBottom: '27px', textAlign: 'center' }}>
        <Typography children={'Check Email'} variant={'H1'} />
      </div>
      <div style={{ display: 'flex', marginBottom: '19px' }}>
        <ReactSVG
          src={emailIcon}
          style={{
            display: 'inline-block',
            margin: '0px auto',
          }}
        />
      </div>
      <div style={{ marginBottom: '65px', textAlign: 'center' }}>
        <Typography
          children={'We’ve sent an Email with instructions to example@mail.com '}
          color={'#808080'}
          variant={'Body2'}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button children={'Send Instructions'} fullWidth type={'submit'} />
      </div>
    </>
  )
}
