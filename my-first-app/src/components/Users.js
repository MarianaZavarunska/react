import React from "react";

import User from "./User";

const Users = ({ users }) => {
  return (
    <div>
      <div className="users-container">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
