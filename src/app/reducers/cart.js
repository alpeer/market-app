import { createSlice } from '@reduxjs/toolkit'

const sessionState = sessionStorage.getItem("cart")
const cartSlice = createSlice({
  name: 'cart',
  initialState: sessionState
    ? JSON.parse(sessionState)
    : {
      items: {},
      totalCost: 0,
    },
  reducers: {
    countChanged: (state, { payload: { id, count, price, name } }) => {
      if (count === 0) {
        delete state.items[id]
      } else {
        state.items[id] = { id, count, price, name }
      }
      state.totalCost = calculateTotalCost(state.items)
      sessionStorage.setItem("cart", JSON.stringify({
        items: state.items,
        totalCost: state.totalCost
      }))
    }
  }
})

const calculateTotalCost = (items) => Object.values(items)
  .reduce((total, { count, price }) =>
    total + count * price, 0)

export default cartSlice.reducer;
