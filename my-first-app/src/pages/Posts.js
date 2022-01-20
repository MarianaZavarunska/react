import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Service from "../services/service";
import Post from "../components/Posts/Post";
import "../components/Posts/Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postsService = new Service("posts");

    postsService.getAllDate().then((response) => setPosts([...response]));
  }, []);
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <Outlet />
    </div>
  );
};

export default Posts;
