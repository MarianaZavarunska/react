import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import usersService from "../../services/users.service";
import Users from "../../components/Users/Users";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersService.getAll().then((response) => setUsers([...response]));
  }, []);

  return (
    <div>
      {users && users.map((user) => <Users key={user.id} user={user} />)}
      <Outlet />
    </div>
  );
};

export default UsersPage;
