import React, { useEffect, useState } from 'react'
import { Cart } from './Cart'

export default {
  title: 'Components/Cart',
  component: Cart,
  argTypes: {
    items: { control: 'object'}
  }
};

const Template = (args) => {
  const [counts, setCounts] = useState({ 1: 1, 2: 1, 3: 1 })
  const [items, setItems] = useState({})
  useEffect(() => {
    const newItems = { ...args.items }, newCounts = {}
    Object.keys(newItems).forEach((id) => {
      id = Number(id)
      newCounts[id] = newItems[id].count || 1
    })
    setItems(newItems)
    setCounts(newCounts)
  }, [JSON.stringify(args.items)])
  const itemsProp = Object.fromEntries(
    Object.entries(items)
      .map(([id, item]) =>
        [id, { ...item, count: counts[id] }]))
  const onCountChange = ({ id }) =>
    (count) => {
      id = Number(id)
      setCounts((state) => {
        const nextState={ ...state}
        if (count > 0) { nextState[id] = count }
        else { delete nextState[id] }
        return nextState
      })
      setItems((state) => {
        const nextState={ ...state}
        if (count < 1) { 
          delete nextState[id]
        }
        return nextState
      })
    }
      
  const totalCost = Object.values(itemsProp)
    .reduce((total, { price, count }) =>
      total + price * count, 0)

  return <Cart totalCost={totalCost} items={itemsProp} onCountChange={onCountChange} />
}

export const Primary = Template.bind({})
Primary.args = {
  
  items: {
    1: { id: 1, name: "Example Product", price: 14.99 },
    2: { id: 2, name: "Example Product", price: 14.99 },
    3: { id: 3, name: "Example Product", price: 9.99 },
  }
}
export const Empty = Template.bind({})