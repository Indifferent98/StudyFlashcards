import { Controller } from 'react-hook-form'

import { SuperCheckBox } from '@/components/ui/CheckBox'

type Props = {
  control: any
  name: string
  title: string
}
export const ControlledCheckBox = ({ control, name, title }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <SuperCheckBox checked={field.value} onValueChange={field.onChange} title={title} />
      )}
    />
  )
}
