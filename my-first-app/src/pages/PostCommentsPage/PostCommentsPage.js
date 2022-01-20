import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PostComments from "../../components/Posts/PostComments";
import Service from "../../services/service";
import "../../components/Posts/Posts.css";

const PostCommentsPage = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let commentsService = new Service("posts");
    commentsService
      .getAllComments(id)
      .then((response) => setComments([...response]));
  }, [id]);

  return (
    <div className="post-comments-container">
      {comments &&
        comments.map((comment) => (
          <PostComments key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default PostCommentsPage;
