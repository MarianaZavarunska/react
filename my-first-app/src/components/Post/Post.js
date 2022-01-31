import React from "react";

const Post = ({ post: { id, title } }) => {
  return (
    <div>
      {id}. {title}
    </div>
  );
};

export default Post;
