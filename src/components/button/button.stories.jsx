import React from 'react'
import { Button } from './button'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    text: "Hello",
  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})

export const Small = Template.bind({})

Small.args = { size: "sm" }

export const Large = Template.bind({})

Large.args = { size: "lg" }
