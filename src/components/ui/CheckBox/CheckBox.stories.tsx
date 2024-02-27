import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { SuperCheckBox } from './CheckBox'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: SuperCheckBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Example/SuperCheckBox',
} satisfies Meta<typeof SuperCheckBox>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const defaultCheckBox: Story = {
  args: { demo: true },
}

export const CheckBoxWithTitle: Story = {
  args: {
    demo: true,
    title: 'Hello world',
  },
}
