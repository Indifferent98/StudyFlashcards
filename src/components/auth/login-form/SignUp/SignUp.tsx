import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from '../controlled/controlledInput'

import { DevTool } from '@hookform/devtools'
import { Typography } from '@/components/ui/Typography'

export const SignUp = () => {
  type FormValues = {
    email: string
    password: string
    confirmPassword: string
    confirmError: string
  }

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const loginSchema = z
    .object({
      email: z.string().email({ message: 'Invalid email address' }),
      password: z.string().min(3, 'Too short password').max(30),
      confirmPassword: z.string().min(3, 'Too short password').max(30),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: `Passwords don't match`,
      path: ['confirmError'],
    })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', confirmPassword: '' },
    mode: 'onSubmit',
  })
  console.log(errors)
  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: 'center', marginBottom: '27px' }}>
          <Typography variant="H1" children={'Sign Up'} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <ControlledInput
            control={control}
            errorMessage={errors.email?.message}
            name="email"
            helperMessage="Email"
          />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <ControlledInput
            control={control}
            errorMessage={
              errors.confirmError?.message ? errors.confirmError?.message : errors.password?.message
            }
            variant="password"
            name="password"
            helperMessage="Password"
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
            variant="password"
            name="confirmPassword"
            helperMessage="Confirm Password"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <Button children={'Sign Up'} type={'submit'} fullWidth />
        </div>
        <div style={{ textAlign: 'center', marginBottom: '7px' }}>
          <Typography variant="Body2" children={`Already have an account?`} color="#C3C1C7" />
        </div>
        <div style={{ textDecoration: 'underLine', textAlign: 'center' }}>
          <Typography variant="Body1" children={`Sign In`} color="#8C61FF" />
        </div>
      </form>
    </>
  )
}
