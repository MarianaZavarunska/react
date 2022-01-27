import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div>
      <p>{post.title}</p>
      <Link to={`${post.id}/comments`}>Comments</Link>
    </div>
  );
};

export default Post;
