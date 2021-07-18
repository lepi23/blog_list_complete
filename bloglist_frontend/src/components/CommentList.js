import React, { useState, useEffect } from 'react'
import commentService from '../services/comments'



const CommentList = ({id}) => {
    const [comments, setComments] = useState([])
useEffect(() => {
    commentService
      .getAll(id)
      .then((data) => {
        setComments(data)
      })
  }, [id])
    return(
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => 
                    <li key = {comment.id}>
                        {comment.content}
                    </li>)}
            </ul>
        </div>
    
    )
}
export default CommentList