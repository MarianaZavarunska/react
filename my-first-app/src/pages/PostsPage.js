import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post/Post";
import { getAllPosts } from "../store/posts.slice";

const PostsPage = () => {
  const { posts, status, error } = useSelector(
    (state) => state["postsReducer"]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <div>
      {status === "pending" && <h1>Loading</h1>}
      {error && <h1 style={{ color: "red" }}>{error}</h1>}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;
