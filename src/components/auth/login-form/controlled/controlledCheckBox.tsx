import { SuperCheckBox } from '@/components/ui/CheckBox'
import { Controller, useController } from 'react-hook-form'

type Props = {
  control: any
  title: string
  name: string
}
export const ControlledCheckBox = ({ control, title, name }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <SuperCheckBox checked={field.value} onValueChange={field.onChange} title={title} />
      )}
    />
  )
}
