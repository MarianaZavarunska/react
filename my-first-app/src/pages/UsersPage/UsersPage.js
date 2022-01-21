import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

// import User from "../components/Users/User";
import Service from "../../services/service";
import "../../components/Users/Users.css";
// import UserDetailsPage from "../UserDetailsPage/UserDetailsPage";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let usersService = new Service("users");

    usersService.getAllDate().then((response) => setUsers([...response]));
  }, []);

  return (
    <div className="users-container">
      <div className="users-title-container">
        <h2>Push on the user to get details</h2>
        <div className="users-title-context">
          {users.map((user) => (
            <div>
              <NavLink key={user.id} to={user.id.toString()} state={user}>
                {user.id}. {user.name}
              </NavLink>
              <span>
                <NavLink key={user.id} to={`${user.id}/albums`}>
                  Get Albums
                </NavLink>
              </span>
            </div>
          ))}
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Users;
