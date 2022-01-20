import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <div className="menu-container">
        <div>
          <NavLink NavLink to={"users"}>
            Users
          </NavLink>
        </div>
        <div>
          <NavLink to={"posts"}>Posts</NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
