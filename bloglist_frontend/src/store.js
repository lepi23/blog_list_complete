import { createStore, combineReducers,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'
import { useReducer } from 'react'

const reducer = combineReducers({
    blogs: blogReducer,
    notification: notificationReducer,
    users: userReducer,
    loggedUser: loginReducer
  })
export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))