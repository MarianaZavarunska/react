import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import usersService from "../../services/users.service";
import User from "../../components/Users/User";

// const UserDetails = () => {
//   const { state } = useLocation();
//   const {
//     user: { id, name, username, email, phone },
//   } = state;

//   return (
//     <div className="user-container">
//       <hr />
//       <div>
//         {id}. {name}
//       </div>
//       <div>Username: {username}</div>
//       <div>Email: {email}</div>
//       <div>Phone: {phone}</div>
//       {state.user && <Link to={"posts"}>Get Posts</Link>}
//       <Outlet />
//     </div>
//   );
// };

// export default UserDetails;

const UserDetails = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    usersService.getUserById(id).then((response) => setUser({ ...response }));
  }, [id]);
  return (
    <div className="user-container">
      <User user={user} />

      <Outlet />
    </div>
  );
};

export default UserDetails;
