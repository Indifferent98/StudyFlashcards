import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Example/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AnswerCard: Story = {
  args: {
    variant: 'Answer',
    answer: 'Planets count is eight',
    deckName: 'Planets',
    question: 'how much planets exists',
  },
}

export const SignInCard: Story = {
  args: {
    variant: 'SignIn',
  },
}
