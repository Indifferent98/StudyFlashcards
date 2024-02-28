import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ControlledInput } from '../controlled/controlledInput'

export const SignUp = () => {
  type FormValues = {
    confirmError: string
    confirmPassword: string
    email: string
    password: string
  }

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const loginSchema = z
    .object({
      confirmPassword: z.string().min(3, 'Too short password').max(30),
      email: z.string().email({ message: 'Invalid email address' }),
      password: z.string().min(3, 'Too short password').max(30),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: `Passwords don't match`,
      path: ['confirmError'],
    })

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { confirmPassword: '', email: '', password: '' },
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
  })

  console.log(errors)

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: '27px', textAlign: 'center' }}>
          <Typography children={'Sign Up'} variant={'H1'} />
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
            errorMessage={
              errors.confirmError?.message ? errors.confirmError?.message : errors.password?.message
            }
            helperMessage={'Password'}
            name={'password'}
            variant={'password'}
          />
        </div>
        <div style={{ marginBottom: '60px' }}>
          <ControlledInput
            control={control}
            errorMessage={
              errors.confirmError?.message
                ? errors.confirmError?.message
                : errors.confirmPassword?.message
            }
            helperMessage={'Confirm Password'}
            name={'confirmPassword'}
            variant={'password'}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Button children={'Sign Up'} fullWidth type={'submit'} />
        </div>
        <div style={{ marginBottom: '7px', textAlign: 'center' }}>
          <Typography children={`Already have an account?`} color={'#C3C1C7'} variant={'Body2'} />
        </div>
        <div style={{ textAlign: 'center', textDecoration: 'underLine' }}>
          <Typography children={`Sign In`} color={'#8C61FF'} variant={'Body1'} />
        </div>
      </form>
    </>
  )
}
