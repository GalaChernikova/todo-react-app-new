import { configureStore } from '@reduxjs/toolkit'
import todoReducer  from './todoSlice'
import postReducer from './postSlice'
import commentReducer from './commentsSlice'

export default configureStore({
  reducer: {
    todos: todoReducer,
    posts: postReducer,
    comments: commentReducer,
  }
})