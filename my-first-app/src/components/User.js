import React from "react";

const User = ({ user: { id, name, username, email } }) => {
  return (
    <div className="user-container">
      <div>
        <b>Id:</b> {id}
      </div>
      <div>
        <b>Name:</b> {name}
      </div>
      <div>
        <b>Username:</b> {username}
      </div>
      <div>
        <b>Email:</b> {email}
      </div>
    </div>
  );
};

export default User;
