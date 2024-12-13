import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../features/category/categorySlice.jsx'

const store = configureStore({
  reducer: {
    category: categoryReducer
  }
})

export default store