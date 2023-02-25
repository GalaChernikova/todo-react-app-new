import { configureStore } from '@reduxjs/toolkit'
import todoReducer  from './todoSlice'
import postReducer from './postSlice'


export default configureStore({
  reducer: {
    todos: todoReducer,
    posts: postReducer,
  }
})