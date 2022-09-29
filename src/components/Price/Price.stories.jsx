import React from 'react';

import { Price } from './Price';

export default {
  title: 'Components/Price',
  component: Price,
  argTypes: {
    value: { control: 'number', defaultValue: 1},
    className: { control: 'text'},
  },
};

const Template = (args) => <Price {...args} />;

export const Primary = Template.bind({});