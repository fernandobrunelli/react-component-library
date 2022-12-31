// Button.story.ts|tsx

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Basic: Story = {
  args: {
    label: 'Button',
  },
}
export const Primary: Story = {
  args: {
    label: 'Primary',
  },
}
