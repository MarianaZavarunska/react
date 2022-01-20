import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Service from "../../services/service";
import "../../components/Posts/Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postsService = new Service("posts");

    postsService.getAllDate().then((response) => setPosts([...response]));
  }, []);
  return (
    <div className="posts-container">
      <div className="posts-title-container">
        <h2>Push on the post to get details</h2>

        <div className="posts-title-context">
          {posts.map((post) => (
            <NavLink
              key={post.id}
              to={post.id.toString()}
              state={post}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              <div>
                {post.id}. {post.title}
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Posts;
