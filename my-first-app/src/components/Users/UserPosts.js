import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Service from "../../services/service";
import Post from "../Posts/Post";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  console.log();

  useEffect(() => {
    let postsService = new Service("users");

    postsService.getAllPosts(id).then((response) => setPosts([...response]));
  }, [id]);

  return (
    <div>
      {posts && posts.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
};

export default UserPosts;
