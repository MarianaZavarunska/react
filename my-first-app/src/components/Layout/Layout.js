import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  return (
    <div>
      Layout <Link to={"users"}>Get Users</Link>
      <Outlet />
    </div>
  );
};

export default Layout;
