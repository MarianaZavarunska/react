import React from "react";

const Comment = ({ comment: { id, name } }) => {
  return (
    <div>
      {id}.{name}
    </div>
  );
};

export default Comment;
