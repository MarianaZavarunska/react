import React from 'react';

import { useEffect, useState } from 'react';
import Post from "./Post";
import './Posts.css'
import {services} from "../../services/services";


const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        services.getAllPosts(userId)
        .then(posts => setPosts(posts))
    }, [userId])

    return (

        <div className='posts-container'>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
            
        </div>
    );
};

export default Posts;