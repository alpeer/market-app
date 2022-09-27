import React, { useEffect, useState } from 'react'
import { RadioGroup } from './RadioGroup'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    className: { control: 'text' },
    options: { control: 'array', defaultValue: [{id: 1, label:"Option 1"},{id: 2, label:"Option 2"}] },
    value: { control: "text", defaultValue: 1}
  },
};

const Template = (args) => {
  const [value, setValue] = useState()
  useEffect(() => {
    setValue(args.value)
  },[args.value])
  return <RadioGroup {...args} value={Number(value)} onChange={setValue} />
}
export const Primary = Template.bind({})