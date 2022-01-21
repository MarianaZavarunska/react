import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email, phone } = user;

  return (
    <div>
      <div>Id: {id}</div>
      <div>Name: {name}</div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <div>Phone: {phone}</div>
      <Link to={"posts"}>Get Posts</Link>
    </div>
  );
};

export default User;
