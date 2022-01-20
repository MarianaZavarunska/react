import React from "react";

const UserPosts = ({ post }) => {
  const { userId, id, title, body } = post;
  return (
    <div>
      <div> userId: {userId}</div>
      <div>Id: {id}</div>
      <div> Title: {title}</div>
      <div> Body: {body}</div>
    </div>
  );
};

export default UserPosts;
