import type { Meta, StoryObj } from '@storybook/react'

import { PolymorphicButton } from './PolymorphicButton'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/PolymorphicButton',
  component: PolymorphicButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PolymorphicButton>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryButton: Story = {
  args: { children: 'Primary', disabled: false },
}

export const SecondaryButton: Story = {
  args: { variant: 'secondary', children: 'Secondary', disabled: false },
}

export const PrimaryFullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Full Width',
    disabled: false,
    fullWidth: true,
  },
  parameters: {
    layout: 'center ',
  },
}

export const SecondaryFullWidth: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Full Width',
    disabled: false,
    fullWidth: true,
  },
  parameters: {
    layout: 'center ',
  },
}

// export const Small1: Story = {
//   render: () => (
//     <div>
//       <PolymorphicButton children={'FullWidth'} fullWidth={true} />
//     </div>
//   ),
// }
