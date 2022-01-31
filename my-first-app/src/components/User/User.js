import React from "react";

const User = ({
  user: {
    id,
    name,
    username,
    email,
    address: { street, suite },
    phone,
  },
}) => {
  return (
    <div style={{ width: "250px" }}>
      <div>Id: {id}</div>
      <div>Name: {name}</div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <div>
        Address: {street} {suite}
      </div>
      <div>Phone: {phone}</div>
    </div>
  );
};

export default User;
