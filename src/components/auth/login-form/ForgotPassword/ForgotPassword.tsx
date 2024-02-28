import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from '../controlled/controlledInput'

import { DevTool } from '@hookform/devtools'
import { Typography } from '@/components/ui/Typography'

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
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '' },
    mode: 'onSubmit',
  })

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: 'center', marginBottom: '27px' }}>
          <Typography variant="H1" children={'Forgot your password?'} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <ControlledInput
            control={control}
            errorMessage={errors.email?.message}
            name="email"
            helperMessage="Email"
          />
        </div>
        <div style={{ marginBottom: '65px' }}>
          <Typography
            variant="Body2"
            children={'Enter your email address and we will send you further instructions '}
            color="#808080"
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Button children={'Send Instructions'} type={'submit'} fullWidth />
        </div>
        <div style={{ textAlign: 'center', marginBottom: '7px' }}>
          <Typography
            variant="Body2"
            children={`Did you remember your password?`}
            color="#C3C1C7"
          />
        </div>
        <div style={{ textDecoration: 'underLine', textAlign: 'center' }}>
          <Typography variant="Body1" children={`Try logging in`} color="#8C61FF" />
        </div>
      </form>
    </>
  )
}
