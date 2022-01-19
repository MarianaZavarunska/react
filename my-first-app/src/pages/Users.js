import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import User from "../components/Users/User";
import Service from "../services/service";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let usersService = new Service("users");

    usersService.getAllDate().then((response) => setUsers([...response]));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <Outlet />
    </div>
  );
};

export default Users;
