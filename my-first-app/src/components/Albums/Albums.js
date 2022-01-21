import React from "react";
import { NavLink } from "react-router-dom";

import "../../components/Users/Users.css";

const Albums = ({ album: { id, title } }) => {
  return (
    <div className="album-container">
      <div>
        {id}. {title}
      </div>
      <NavLink to={`${id}/photos`}>Get Photos</NavLink>
    </div>
  );
};

export default Albums;
