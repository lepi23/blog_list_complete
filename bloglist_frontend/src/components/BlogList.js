import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog} from '../reducers/blogReducer'
import {setNotification} from '../reducers/notificationReducer'
import {Link} from "react-router-dom"

const BlogList = () => {
    const dispatch = useDispatch()
    const blogs = useSelector(state => state.blogs)
    const remove = (blog) => {
      dispatch(removeBlog(blog))
      dispatch(setNotification(`${blog.title} succesfully removed`, 5))
    }

    return(
      <ul>
        {blogs.map(blog => 
          <li key = {blog.id} className='blog'>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        )}

      </ul>
    )
  }
  
export default BlogList