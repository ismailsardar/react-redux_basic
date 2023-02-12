import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import myCounterReducer from '../features/myCounter/myCounterSlice'
import postReducer from '../features/posts/postSlice'
import userReduser from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    myCounter: myCounterReducer,
    users: userReduser
  },
})