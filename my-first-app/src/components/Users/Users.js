import React from "react";
import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} id={user.id} name={user.name} email={user.email} />
      ))}
      ;
    </div>
  );
};

export default Users;
