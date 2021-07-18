import loginService from '../services/login'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
        return action.data
    case 'LOGOUT':
        return null
    case 'LOGGED_IN':
        return action.user
    default: 
        return state
  }
}
export const login = (username, password) => {
    return async dispatch => {
    const data = await loginService.login({
            username, password,
    })
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(data)
    )
      dispatch({
        type: 'LOGIN',
        data
      })
    }
  }
export const logout = () => {
    localStorage.clear()
    console.log('logout')
    return async dispatch => {
        dispatch({
            type: 'LOGOUT'
        })
    }
}
export const loggedIn = (user) => {
    return async dispatch => {
        dispatch({
            type: 'LOGGED_IN',
            user
        })
    }
}
  
  export default reducer