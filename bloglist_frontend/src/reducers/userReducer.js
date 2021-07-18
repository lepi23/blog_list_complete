import userServise from '../services/users'

const byBlogs = (u1, u2) => u2.blogs.length - u1.blogs.length

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_USERS':
      return action.data.sort(byBlogs)
    default: 
      return state
  }
}
export const initializeUsers = () => {
  return async dispatch => {
    
    const data = await userServise.getAll()
    dispatch({
      type: 'INIT_USERS',
      data
    })
  }
}

export default reducer