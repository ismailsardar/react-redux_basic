import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import myCounterReducer from '../features/myCounter/myCounterSlice'
import postReducer from '../features/posts/postSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    myCounter: myCounterReducer
  },
})