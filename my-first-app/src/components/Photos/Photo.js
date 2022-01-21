import React from "react";

import "../Users/Users.css";

const Photo = ({ photo: { title, thumbnailUrl } }) => {
  return (
    <div className="photo-container">
      <h5>{title}</h5>
      <img src={thumbnailUrl} alt={title} />
    </div>
  );
};

export default Photo;
