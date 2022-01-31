import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
        margin: "10px",
      }}
    >
      <Link to={"cars"}>Cars</Link>
      <Link to={"users"}>Users</Link>
      <Link to={"posts"}>Posts</Link>
      <Link to={"comments"}>Comments</Link>

      <Outlet />
    </div>
  );
};

export default Layout;
