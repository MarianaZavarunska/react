import React from 'react';

import { useEffect, useState } from 'react';
import Post from "./Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+userId+'/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
    }, [userId])

    return (

        <div className='posts-container'>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
            
        </div>
    );
};

export default Posts;