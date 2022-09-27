import { configureStore } from '@reduxjs/toolkit'
import cart from './reducers/cart'
import brands from './reducers/brands'
import products from './reducers/products'

export const store = configureStore({
  reducer: {
    cart,
    brands,
    products
  }
})
