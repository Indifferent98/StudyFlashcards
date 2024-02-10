import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const allTypography: Story = {
  render: () => {
    return (
      <div>
        <Typography variant="H1" children="H1" />
        <Typography variant="H2" children="H2" />
        <Typography variant="H3" children="H3" />
        <Typography variant="H4" children="H4" />
        <Typography variant="Body1" children="Body1" />
        <Typography variant="Body2" children="Body2" />
        <Typography variant="Caption" children="Caption" />
        <Typography variant="Link1" children="Link1" />
        <Typography variant="Link2" children="Link2" />
        <Typography variant="Overline" children="Overline" />
        <Typography variant="Subtitle1" children="Subtitle1" />
        <Typography variant="Subtitle2" children="Subtitle2" />
      </div>
    )
  },
}

export const H1: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'H1' },
}

export const H2: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'H2' },
}
export const H3: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'H3' },
}
export const H4: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'H4' },
}

export const Body1: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'Body1' },
}

export const Body2: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'Body2' },
}
export const Caption: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'Caption' },
}
export const Link1: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'Link1' },
}

export const Link2: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'Link2' },
}

export const Overline: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'Overline' },
}
export const Subtitle1: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'Subtitle1' },
}
export const Subtitle2: Story = {
  args: { children: 'TEXT CHECK text check TEXT CHECK text check', variant: 'Subtitle2' },
}
