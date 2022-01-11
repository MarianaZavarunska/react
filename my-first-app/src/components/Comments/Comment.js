import React from 'react';

const Comment = (props) => {
    const {postId, id, name, email, body} = props;
    return (
        <div>
            <h3>{postId}- {id} {name}</h3>
            <p>Email: {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comment;