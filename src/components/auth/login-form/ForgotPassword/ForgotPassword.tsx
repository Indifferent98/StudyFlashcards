import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ControlledInput } from '../controlled/controlledInput'

export const ForgotPassword = () => {
  type FormValues = { email: string }

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { email: '' },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '27px', textAlign: 'center' }}>
          <Typography children={'Forgot your password?'} variant={'H1'} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <ControlledInput
            control={control}
            errorMessage={errors.email?.message}
            helperMessage={'Email'}
            name={'email'}
          />
        </div>
        <div style={{ marginBottom: '65px' }}>
          <Typography
            children={'Enter your email address and we will send you further instructions '}
            color={'#808080'}
            variant={'Body2'}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Button children={'Send Instructions'} fullWidth type={'submit'} />
        </div>
        <div style={{ marginBottom: '7px', textAlign: 'center' }}>
          <Typography
            children={`Did you remember your password?`}
            color={'#C3C1C7'}
            variant={'Body2'}
          />
        </div>
        <div style={{ textAlign: 'center', textDecoration: 'underLine' }}>
          <Typography children={`Try logging in`} color={'#8C61FF'} variant={'Body1'} />
        </div>
      </form>
    </>
  )
}
