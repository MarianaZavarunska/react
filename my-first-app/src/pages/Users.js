import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

// import User from "../components/Users/User";
import Service from "../services/service";
import "../components/Users/Users.css";
import UserDetails from "./UserDetails";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let usersService = new Service("users");

    usersService.getAllDate().then((response) => setUsers([...response]));
  }, []);

  return (
    <div>
      <div className="users-container">
        {users.map((user) => (
          <Link key={user.id} to={user.id.toString()} element={<UserDetails />}>
            <div>
              {user.id} {user.name}
            </div>
          </Link>
        ))}
      </div>
      <div className="user-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Users;

// {users.map((user) => (
//   <User key={user.id} user={user} />
// ))}
