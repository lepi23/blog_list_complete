import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {login} from '../reducers/loginReducer'
import { Form, Button } from 'react-bootstrap'

const LoginForm = ({
    handleUsernameChange,
    handlePasswordChange,
    username,
    password
}) => {
    const dispatch = useDispatch()
    const handleLogin  = async (event) => {
        event.preventDefault()
        dispatch(login(username, password))
    } 
    return (
        <div>
            <h2>Log in to application</h2>
            <Form onSubmit = {handleLogin}>
                <Form.Group>
                    <Form.Label>username:</Form.Label>
                    <Form.Control
                        id='username'
                        type="text"
                        value={username}
                        name="Username"
                        onChange={handleUsernameChange}
                    />
                    <Form.Label>password:</Form.Label>
                    <Form.Control
                        id='password'
                        type="password"
                        value={password}
                        name="Password"
                        onChange={handlePasswordChange}
                    />
                    <Button variant="primary" type="submit">
                        login
                    </Button> 
                </Form.Group>
            </Form>
        </div>
    )
}
LoginForm.propTypes = {
    handleUsernameChange: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}
export default LoginForm
