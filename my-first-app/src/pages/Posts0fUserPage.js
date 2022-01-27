import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Post from "../components/Post/Post";

const PostsOfUserPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((response) => setPosts([...response]));
  }, [id]);
  return (
    <div>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      <Outlet />
    </div>
  );
};

export default PostsOfUserPage;
