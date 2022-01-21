import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import usersService from "../../services/users.service";

const UserPostsPage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    usersService.getUserPosts(id).then((response) => setPosts([...response]));
  }, [id]);
  return (
    <div className="user-posts-container">
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            {post.id}. {post.title}
          </div>
        ))}
    </div>
  );
};

export default UserPostsPage;
