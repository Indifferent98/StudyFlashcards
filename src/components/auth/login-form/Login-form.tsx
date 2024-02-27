import { Controller, useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/Button'
import { SuperCheckBox } from '@/components/ui/CheckBox'
import { Input } from '@/components/ui/Input'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>()

  const { field: rememberField } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })
  // const { field: emailField } = useController({
  //   control,
  //   defaultValue: '',
  //   name: 'email',
  // })
  // const { field: passwordField } = useController({
  //   control,
  //   defaultValue: '',
  //   name: 'password',
  // })

  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  console.log(errors, 'Errors is ')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginBottom: '24px' }}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Enter email',
            pattern: { value: emailRegex, message: 'Invalid email' },
          }}
          render={({ field }) => (
            <Input
              fullWidth
              helperMessage={'Email'}
              variant={'default'}
              {...field}
              errorMessage={errors.email?.message}
            />
          )}
        />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Enter password',
            minLength: { value: 5, message: 'Password should be longer or equal 5 symbols' },
            maxLength: { value: 30, message: 'Password too long' },
          }}
          render={({ field }) => (
            <Input
              {...field}
              fullWidth
              helperMessage={'Password'}
              variant={'password'}
              errorMessage={errors.password?.message}
            />
          )}
        />
      </div>

      <div>
        <SuperCheckBox
          checked={rememberField.value}
          onValueChange={rememberField.onChange}
          title={'Remember me'}
          {...register('rememberMe')}
        />
        <Button children={'Submit'} type={'submit'} />
      </div>
    </form>
  )
}
