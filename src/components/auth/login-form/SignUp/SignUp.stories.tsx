import type { Meta, StoryObj } from '@storybook/react'

import { SignUp } from './SignUp'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: SignUp,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'LoginForm/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SignUpForm: Story = {
  args: {},
}
