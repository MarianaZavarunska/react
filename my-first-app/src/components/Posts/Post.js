import React from 'react';

const Post = ({post:{userId, id,title, body}}) => {
    return (
        <div>
            <div>userId: {userId} </div>
            <div>Id: {id} </div>
            <div>title: {title} </div>
            <div>body: {body}</div>

        </div>
    );
};

export default Post;