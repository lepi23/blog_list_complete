import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../reducers/loginReducer'

const Menu = () => {
    const padding = {
      paddingRight: 5
    }
    const dispatch = useDispatch()
    const user = useSelector(state => state.loggedUser)
    const handleLogout = async (event) => {
        event.preventDefault()
        dispatch(logout())
    }
    return (
      <div className='navigationBar'>
        <a href='/' style={padding}>blogs</a>
        <a href='/users' style={padding}>users</a>
        {user.name} logged in
        <button type="button" onClick={handleLogout}> logout </button>
      </div>
    )
  }
  //<RenderUserInfo user = {user} handleLogout = {handleLogout}/>
  export default Menu