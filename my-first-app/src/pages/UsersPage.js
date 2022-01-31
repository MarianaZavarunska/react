import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllUsers } from "../store/users.slice";

const UsersPage = () => {
  const { users } = useSelector((state) => state["usersReducer"]);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

export default UsersPage;
