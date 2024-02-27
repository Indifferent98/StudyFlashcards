import { Input } from '@/components/ui/Input'
import { InputVariant } from '@/components/ui/Input/Input'
import { Controller } from 'react-hook-form'

type Props = {
  control: any
  errorMessage?: string
  variant?: InputVariant
  helperMessage?: string
  name: string
}

export const ControlledInput = ({ control, errorMessage, variant, name, helperMessage }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          fullWidth
          helperMessage={helperMessage}
          variant={variant}
          errorMessage={errorMessage}
        />
      )}
    />
  )
}
