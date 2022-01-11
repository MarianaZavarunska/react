import React from 'react';
import { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/comments')
       .then(response => response.json())
       .then(comments => setComments(comments))
    }, [])
    return (
        <div>
            {comments.map((comment) => <Comment key={comment.id} postId={comment.postId} id={comment.id} name={comment.name} email ={comment.email} body={comment.body}/>)}
        </div>
    );
};

export default Comments;