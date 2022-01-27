import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CommentsOfPostPage = () => {
  const [comments, setComments] = useState();
  const { postId } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => setComments([...comments]));
  }, [postId]);

  return (
    <div>
      {comments &&
        comments.map((comment) => <p key={comment.id}>{comment.name} </p>)}
    </div>
  );
};

export default CommentsOfPostPage;
