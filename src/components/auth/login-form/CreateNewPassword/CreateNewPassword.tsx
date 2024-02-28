import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Typography } from '@/components/ui/Typography'

export const CreateNewPassword = () => {
  return (
    <>
      <div style={{ marginBottom: '51px', textAlign: 'center' }}>
        <Typography children={'Create new password'} variant={'H1'} />
      </div>
      <div style={{ marginBottom: '19px' }}>
        <Input
          fullWidth
          helperMessage={'Password'}
          style={{ backgroundColor: '#171717' }}
          variant={'password'}
        />
      </div>
      <div style={{ marginBottom: '65px' }}>
        <Typography
          children={'Create new password and we will send you further instructions to email '}
          color={'#808080'}
          variant={'Body2'}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Button children={'Create New Password'} fullWidth type={'submit'} />
      </div>
    </>
  )
}
