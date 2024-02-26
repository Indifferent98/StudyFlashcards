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

  const { field: rememberField } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })
  const { field: emailField } = useController({
    name: 'email',
    control,
    defaultValue: '',
  })
  const { field: passwordField } = useController({
    name: 'password',
    control,
    defaultValue: '',
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  console.log(register('email'))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...emailField} variant="search" helperMessage="Email" fullWidth={true} />
      <Input {...passwordField} variant="password" helperMessage="Password" fullWidth={true} />
      <SuperCheckBox
        checked={rememberField.value}
        onValueChange={rememberField.onChange}
        title="Remember me"
        {...register('rememberMe')}
      />

      <Button type="submit" children={'Submit'} />
    </form>
  )
}
