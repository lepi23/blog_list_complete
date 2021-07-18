import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const BlogForm = ( { createNewBlog } ) => {
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }
    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }
    const addBlog = (event) => {
        event.preventDefault()
        const newBlogObject = {
            author: author,
            title: title,
            url: url
        }
        createNewBlog(newBlogObject)

    }
    return(
        <div>
            <h1>create new</h1>
            <Form onSubmit={addBlog}>
                <Form.Group>
                    <Form.Label>title: </Form.Label>
                    <Form.Control
                        id='title'
                        value={title}
                        onChange={handleTitleChange}
                    />        
                    <Form.Label>Author: </Form.Label>
                    <Form.Control
                        id='author'
                        value={author}
                        onChange={handleAuthorChange}
                    />
                    <Form.Label>url: </Form.Label>
                    <Form.Control
                        id='url'
                        value={url}
                        onChange={handleUrlChange}
                    />
                    <Button variant="primary" type="submit"id='create-button'>
                            create
                    </Button>                   
                </Form.Group>
            </Form>
        </div>
    )}
export default BlogForm