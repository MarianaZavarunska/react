import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import Service from "../services/service";
import User from "../components/Users/User";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let userService = new Service("users");

    userService.getOneDate(id).then((response) => setUser({ ...response }));
  }, [id]);

  return (
    <div>
      {user && <User user={user} />}
      {user && <Link to={"posts"}>Get Posts</Link>}
      <Outlet />
    </div>
  );
};

export default UserDetails;
