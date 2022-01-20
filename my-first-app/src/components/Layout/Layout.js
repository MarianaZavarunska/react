import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="menu-container">
        <div>
          <Link to={"users"}>Users</Link>
        </div>
        <div>
          <Link to={"posts"}>Posts</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
