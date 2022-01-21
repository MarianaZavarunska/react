import React from "react";

const Post = ({ post: { id, title, body } }) => {
  return (
    <div>
      <div>Id: {id}</div>
      <div> Title: {title}</div>
      <div> Body: {body}</div>
    </div>
  );
};

export default Post;
