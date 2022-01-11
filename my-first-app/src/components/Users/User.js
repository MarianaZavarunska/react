import React from "react";
import './User.css';

const User = (props) => {
  const { id, name, email } = props;
  return (
    <div className="user-container">
       <h3>{id}. {name} </h3>
      <p>Email: {email}</p>
    </div>
  )
};

export default User;
