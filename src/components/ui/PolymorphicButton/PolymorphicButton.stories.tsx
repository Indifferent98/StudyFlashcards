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
export const Primary1: Story = {
  args: { children: 'Primary' },
}

export const Secondary1: Story = {
  args: { variant: 'secondary', disabled: true, children: 'Secondary' },
}

export const Large1: Story = {
  args: {},
}

export const Small1: Story = {
  args: {},
}
