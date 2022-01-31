import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllComments } from "../store/comments.slice";
import Comment from "../components/Comment/Comment";

const CommentsPage = () => {
  const { comments, status, error } = useSelector(
    (state) => state["commentsReducer"]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments());
  }, []);

  return (
    <div>
      {status === "pending" && <h1>Loading</h1>}
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsPage;
