import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import User from "../components/User/User";
import { getAllUsers } from "../store/users.slice";

const UsersPage = () => {
  const { users } = useSelector((state) => state["usersReducer"]);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {users && users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UsersPage;
