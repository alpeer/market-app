import React, { useState } from 'react'
import { Cart } from './Cart'

export default {
  title: 'Components/Cart',
  component: Cart,
  argTypes: {
    items: { control: 'object'}
  }
};
const Template = ({items={}}) => {
  const [counts, setCounts] = useState({1:1,2:1,3:1})
  items = Object.fromEntries(
    Object.entries(items)
      .map(([id, item]) =>
        [id, { ...item, count: counts[id] }]))
  const onCountChange = ({ id }) =>
    (count) =>
      setCounts((state) => ({ ...state, [id]: count }))
  const totalCost = Object.values(items)
    .reduce((total, { price, count }) =>
      total + price * count, 0)

  return <Cart totalCost={totalCost} items={items} onChange={onCountChange} />
}

export const Primary = Template.bind({})
Primary.args = {
  
  items: {
    1: { name: "Example Product", price: 14.99 },
    2: { name: "Example Product", price: 14.99 },
    3: { name: "Example Product", price: 9.99 },
  }
}
export const Empty = Template.bind({})