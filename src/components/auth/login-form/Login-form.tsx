import { Button } from '@/components/ui/Button'
import { SuperCheckBox } from '@/components/ui/CheckBox'
import { Input } from '@/components/ui/Input'
import { useController, useForm } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { control, register, handleSubmit } = useForm<FormValues>()

  const { field } = useController({ name: 'rememberMe', control, defaultValue: false })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  console.log(register('email'))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input {...register('email')} /> */}
      <Input {...register('email')} variant="default" aria-label="email" />
      <Input {...register('password')} variant="password" aria-label="password" />
      {/* <input {...register('password')} /> */}
      {/* <Input {...register('email')} label={'email'} />
      // <Input {...register('password')} label={'password'} /> */}
      <SuperCheckBox
        checked={field.value}
        onValueChange={field.onChange}
        {...register('rememberMe')}
      />
      <Button type="submit" children={'Submit'} />
    </form>
  )
}
