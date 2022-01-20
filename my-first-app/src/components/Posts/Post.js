import React from "react";

const Post = ({ post: { userId, id, title, body } }) => {
  //   const { userId, id, title, body } = post;
  return (
    <div>
      <div>Id: {id}</div>
      <div> Title: {title}</div>
      <div> Body: {body}</div>
    </div>
  );
};

export default Post;
