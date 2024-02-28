import { Controller } from 'react-hook-form'

import { Input } from '@/components/ui/Input'
import { InputVariant } from '@/components/ui/Input/Input'

type Props = {
  control: any
  errorMessage?: string
  helperMessage?: string
  name: string
  variant?: InputVariant
}

export const ControlledInput = ({ control, errorMessage, helperMessage, name, variant }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          {...field}
          errorMessage={errorMessage}
          fullWidth
          helperMessage={helperMessage}
          style={{ backgroundColor: '#171717' }}
          variant={variant}
        />
      )}
    />
  )
}
