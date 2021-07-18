import blogService from '../services/blogs'

const byLikes = (b1, b2) => b2.likes - b1.likes

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data.sort(byLikes)
    case 'LIKE':
      const liked = action.data
      return state.map(blog => blog.id===liked.id ? liked : blog).sort(byLikes)
    case 'CREATE': 
      return [...state, action.data]
    case 'REMOVE': 
      return state.filter(blog => blog.id !== action.toRemove).sort(byLikes)
    default: 
      return state
  }
}

export const createBlog = (content) => {
  return async dispatch => {
    console.log(content)
    const data = await blogService.create(content)
    dispatch({
      type: 'CREATE',
      data
    })
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const data = await blogService.getAll()
    dispatch({
      type: 'INIT',
      data
    })
  }
}

export const likeBlog = (blog) => {
  return async dispatch => {
    const toLike = { ...blog, likes: blog.likes + 1, user: blog.user.id }
    const data = await blogService.update(blog.id, toLike)
    dispatch({
      type: 'LIKE',
      data
    })
  }
}

export const removeBlog = (blog) => {
    return async dispatch => {
      const toRemove = blog.id
      await blogService.remove(toRemove)
      dispatch({
        type: 'REMOVE',
        toRemove
      })
    }
    
  }
export default reducer