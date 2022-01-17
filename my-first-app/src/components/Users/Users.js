import React from "react";

import { useEffect, useState } from "react";

import User from "./User";
import "./Users.css";
import "../UserDetails/UserDetails.css";
import { services } from "../../services/services";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    services.getAllUsers().then((users) => setUsers(users));
  }, []);

  return (
    <div className="users-container">
      {users.map((user) => (
        <User key={user.id} user={user} getUser={props.getUser} />
      ))}
    </div>
  );
};

export default Users;
