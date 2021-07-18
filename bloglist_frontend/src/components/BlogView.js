import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useParams, Link} from "react-router-dom"
import {likeBlog, removeBlog} from '../reducers/blogReducer'
import {setNotification} from '../reducers/notificationReducer'
import CommentList from './CommentList'

const BlogView = () => {
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs)
    const id = useParams().id
    const blog = blogs.find(b => String(b.id) === String(id))
    const handleLike = () => {
        dispatch(likeBlog(blog))
        dispatch(setNotification(`liked ${blog.title}`, 5))
    }
    if (!blog) {
        return null
      }
    return(
    <div>
        <h1>{blog.title}</h1>
        <div>
            <a target="_blank" href={blog.url}>{blog.url}</a>
            <p>{blog.likes} likes <button onClick={handleLike}>like</button></p>
            <p>added by {blog.user.name}</p>
            <CommentList id={blog.id}/>
        </div>
    </div>
    )
}
export default BlogView