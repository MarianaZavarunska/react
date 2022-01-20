import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Service from "../../services/service";
import "../../components/Users/Users.css";
import UserPosts from "../../components/Users/UserPosts";

const UserPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let postsService = new Service("users");

    postsService.getAllPosts(id).then((response) => setPosts([...response]));
  }, [id]);

  return (
    <div className="user-posts-container">
      {posts && posts.map((post) => <UserPosts key={post.id} post={post} />)}
    </div>
  );
};

export default UserPostsPage;
