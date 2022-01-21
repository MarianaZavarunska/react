import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <div>
          <NavLink NavLink to={"users"}>
            Users
          </NavLink>
        </div>
        <div>
          <NavLink to={"posts"}>Posts</NavLink>
        </div>
      </div>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer">
        <span>@M.Zavarunska</span>
      </div>
    </div>
  );
};

export default Layout;
