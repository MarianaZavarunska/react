import React from "react";

const Post = ({ post }) => {
  const { userId, id, title } = post;
  return (
    <div>
      <div> userId: {userId}</div>
      <div>Id: {id}</div>
      <div> Name: {title}</div>

      <hr />
    </div>
  );
};

export default Post;
