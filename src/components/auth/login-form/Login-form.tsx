import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/Button'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ControlledInput } from './controlled/controlledInput'
import { ControlledCheckBox } from './controlled/controlledCheckBox'

export const LoginForm = () => {
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
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <div style={{ marginBottom: '24px' }}>
        <ControlledCheckBox name="rememberMe" control={control} title="Remember me" />
      </div>
      <Button children={'Submit'} type={'submit'} />
    </form>
  )
}
