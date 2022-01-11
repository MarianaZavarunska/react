import React from 'react';
import './Post.css';

const Post = (props) => {
    const {userId,id,title,body} = props;
    return (
        <div className='post-container'>
            <h3>{userId} - {id}</h3> 
            <h3> {title}</h3>
            {body}
        </div>
    );
};

export default Post;