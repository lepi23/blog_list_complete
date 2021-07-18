import React, { useState, useEffect, useRef } from 'react'
import BlogList from './components/BlogList'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'
import Notification from './components/Notification'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import UsersView from './components/UsersView'
import UserView from './components/Userview'
import BlogView from './components/BlogView'
import Menu from './components/Menu'
import {setNotification} from './reducers/notificationReducer'
import {loggedIn} from './reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import {Switch, Route, Link, Router} from "react-router-dom"

import { initializeBlogs, createBlog } from './reducers/blogReducer'
import { initializeUsers } from './reducers/userReducer'

const App = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const user = useSelector(state => state.loggedUser)

    useEffect(() => {
        dispatch(initializeBlogs())
      }, [dispatch])

    useEffect(() => {
        dispatch(initializeUsers())
      }, [dispatch])
      
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            dispatch(loggedIn(user))
            blogService.setToken(user.token)
        }
    }, [dispatch])
    
    const blogFormRef = useRef()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const addBlog = (blogObject) => {
        blogFormRef.current.toggleVisibility()
        dispatch(createBlog(blogObject))
        dispatch(setNotification(`a new blog ${blogObject.title} by ${blogObject.author}`, 5))
    }
    if (user === null) {
        return (
            <div class="container">
                <Switch>
                    <Route path='/'>  
                        <Notification />
                        <LoginForm
                            username={username}
                            handleUsernameChange={handleUsernameChange}
                            password={password}
                            handlePasswordChange={handlePasswordChange}
                        />
                    </Route>
                </Switch>
            </div>    
        )
    }
    return (
        <div class="container">
            <h1>blogs</h1>
            <Menu/>
            <Switch>
                <Route path='/blogs/:id'>
                    <BlogView/>
                </Route>
                <Route path='/users/:id'>
                    <UserView/>
                </Route>
                <Route path='/users'>
                    <UsersView/>
                </Route>
                <Route path='/'>        
                    <Notification />
                    <Togglable buttonLabel ='new blog' ref={blogFormRef}>
                        <BlogForm
                            createNewBlog={addBlog}
                        />
                    </Togglable>
                    <BlogList/>
                </Route>
            </Switch>
            
        </div>
    )
}

export default App