import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'Example/ButtonPolymorph',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PolymorphPrimaryButton: Story = {
  args: { children: 'Primary', disabled: false },
}

export const SecondaryButton: Story = {
  args: { children: 'Secondary', disabled: false, variant: 'secondary' },
}

export const PrimaryFullWidth: Story = {
  args: {
    children: 'Primary Full Width',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
  parameters: {
    layout: '',
  },
}

export const SecondaryFullWidth: Story = {
  args: {
    children: 'Secondary Full Width',
    disabled: false,
    fullWidth: true,
    variant: 'secondary',
  },
  parameters: {
    layout: '',
  },
}

export const LinkButton: Story = {
  args: {
    as: 'a',
    children: 'Link like look a button',
    href: 'https://google.com',
  },
}

export const PrimaryWithIcon: Story = {
  args: { children: 'Primary', disabled: false, withIcon: true },
}

export const SecondaryWithIcon: Story = {
  args: { children: 'Secondary', disabled: false, variant: 'secondary', withIcon: true },
}
