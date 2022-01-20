import React from "react";

const PostComments = ({ comment: { postId, id, name, email, body } }) => {
  return (
    <div>
      <div>postId: {postId}</div>
      <div>id: {id}</div>
      <div>name: {name}</div>
      <div>email: {email} </div>
      <div>body: {body}</div>
    </div>
  );
};

export default PostComments;
