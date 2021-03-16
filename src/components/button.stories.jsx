import React from "react"
import { Button } from "./button"

export default {
  title: "Components/Button",
  component: Button,
  args: {
    text: "Hello",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
}

const story = (args) => <Button {...args} />

export const Default = story.bind(null)

export const Small = story.bind(null)

Small.args = { size: "sm" }

export const Large = story.bind(null)

Large.args = { size: "lg" }
