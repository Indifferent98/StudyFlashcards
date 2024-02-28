import { Button } from '@/components/ui/Button'

import { Typography } from '@/components/ui/Typography'
import { ReactSVG } from 'react-svg'
import emailIcon from '@/img/emailIcon.svg'

export const CheckEmail = () => {
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '27px' }}>
        <Typography variant="H1" children={'Check Email'} />
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
          variant="Body2"
          children={'We’ve sent an Email with instructions to example@mail.com '}
          color="#808080"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button children={'Send Instructions'} type={'submit'} fullWidth />
      </div>
    </>
  )
}
