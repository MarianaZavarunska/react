import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <div className="header">
        <Link to={"episode"}>Rick and Morty</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
