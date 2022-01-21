import React from "react";
import { Link } from "react-router-dom";

const Users = ({ user }) => {
  const { id, name } = user;
  return (
    <div>
      {id}. {name}
      <Link to={id.toString()} state={{ user }}>
        Get Details
      </Link>
    </div>
  );
};

export default Users;
