import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ControlledCheckBox } from '../controlled/controlledCheckBox'
import { ControlledInput } from '../controlled/controlledInput'

export const SignIn = () => {
  type FormValues = z.infer<typeof loginSchema>

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(3, 'Too short password').max(30),
    rememberMe: z.boolean(),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { email: '', password: '', rememberMe: false },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '27px', textAlign: 'center' }}>
          <Typography children={'Sign in'} variant={'H1'} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <ControlledInput
            control={control}
            errorMessage={errors.email?.message}
            helperMessage={'Email'}
            name={'email'}
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <ControlledInput
            control={control}
            errorMessage={errors.password?.message}
            helperMessage={'Password'}
            name={'password'}
            variant={'password'}
          />
        </div>
        <div style={{ marginBottom: '6px' }}>
          <ControlledCheckBox control={control} name={'rememberMe'} title={'Remember me'} />
        </div>
        <div style={{ float: 'right', marginBottom: '52px' }}>
          <Typography children={'Forgot Password?'} variant={'Body2'} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Button children={'Sign In'} fullWidth type={'submit'} />
        </div>
        <div style={{ marginBottom: '7px', textAlign: 'center' }}>
          <Typography children={`Don't have an account?`} color={'#C3C1C7'} variant={'Body2'} />
        </div>
        <div style={{ textAlign: 'center', textDecoration: 'underLine' }}>
          <Typography children={`Sign Up`} color={'#8C61FF'} variant={'Body1'} />
        </div>
      </form>
    </>
  )
}
