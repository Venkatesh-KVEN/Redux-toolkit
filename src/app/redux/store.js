import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice'
import commentReducer from './CommentSlice'

export const store = configureStore({ reducer: {
    counter: counterReducer,
    newsubscriber: userReducer,
    newComments: commentReducer
} })