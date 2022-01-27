import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostsOfUserPage = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((response) => setPosts([...response]));
  }, [id]);
  return (
    <div>{posts && posts.map((post) => <p key={post.id}>{post.title}</p>)}</div>
  );
};

export default PostsOfUserPage;
