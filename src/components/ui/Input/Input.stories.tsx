import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Example/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultInput: Story = {
  args: {
    disabled: false,
    helperMessage: 'Input',
  },
}

export const errorInput: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error',
    helperMessage: 'Input',
    variant: 'default',
  },
}

export const passwordInput: Story = {
  args: {
    disabled: false,
    helperMessage: 'Password',
    variant: 'password',
  },
  parameters: {
    layout: '',
  },
}

export const searchInput: Story = {
  args: {
    disabled: false,
    helperMessage: 'Input',
    variant: 'search',
  },
  parameters: {
    layout: '',
  },
}
