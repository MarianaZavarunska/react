import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setUsers([...response]));
  }, []);

  return (
    <div>
      {users &&
        users.map((user) => (
          <button key={user.id}>
            <Link to={`${user.id}/posts`}>{user.name}</Link>
          </button>
        ))}
      <Outlet />
    </div>
  );
};

export default UsersPage;
