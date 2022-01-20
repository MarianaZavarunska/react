import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

import Post from "../../components/Posts/Post";
import "../../components/Posts/Posts.css";

const PostDetailsPage = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost({ ...state });
  }, [id]);

  return (
    <div className="post-details-wrapper">
      <div className="post-details">
        {post && <Post post={post} />}
        {post && (
          <NavLink
            to={"comments"}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Get Comments
          </NavLink>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default PostDetailsPage;
