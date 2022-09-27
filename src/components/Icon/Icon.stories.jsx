import React from 'react'
import { Icon } from './Icon'

export default {
  title: 'Components/Icon/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      defaultValue: "Check",
      options: ["ArrowRight", "Cart", "Check", "Plus", "Minus", "Check2", "Cross"]
    },
    size: { control: 'number', defaultValue: 24 },
  },
};
const Template = (args) => <Icon {...args} />

export const Primary = Template.bind({})
