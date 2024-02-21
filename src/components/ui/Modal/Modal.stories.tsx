import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Example/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AddCardModal: Story = {
  args: {
    variant: 'Card',
  },
}

export const AddDeckModal: Story = {
  args: {
    variant: 'Deck',
  },
}
export const DeleteCardModal: Story = {
  args: {
    variant: 'DeleteCard',
  },
}
