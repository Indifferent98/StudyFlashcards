import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from '../controlled/controlledInput'
import { ControlledCheckBox } from '../controlled/controlledCheckBox'
import { DevTool } from '@hookform/devtools'
import { Typography } from '@/components/ui/Typography'

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
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', rememberMe: false },
    mode: 'onSubmit',
  })

  return (
    <>
      <DevTool control={control} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ textAlign: 'center', marginBottom: '27px' }}>
          <Typography variant="H1" children={'Sign in'} />
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
            errorMessage={errors.password?.message}
            variant="password"
            name="password"
            helperMessage="Password"
          />
        </div>
        <div style={{ marginBottom: '6px' }}>
          <ControlledCheckBox name="rememberMe" control={control} title="Remember me" />
        </div>
        <div style={{ float: 'right', marginBottom: '60px' }}>
          <Typography variant="Body2" children={'Forgot Password?'} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Button children={'Sign In'} type={'submit'} fullWidth />
        </div>
        <div style={{ textAlign: 'center', marginBottom: '7px' }}>
          <Typography variant="Body2" children={`Don't have an account?`} color="#C3C1C7" />
        </div>
        <div style={{ textDecoration: 'underLine', textAlign: 'center' }}>
          <Typography variant="Body1" children={`Sign Up`} color="#8C61FF" />
        </div>
      </form>
    </>
  )
}
