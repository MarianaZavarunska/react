import "./App.css";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/User.details";
import Users from "./components/Users/Users";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const getUser = (user) => {
    setUser(user);
  };

  const getUserId = (id) => {
    setUserId(id);
  };

  return (
    <div className="container">
      <div className="components-container">
        <Users getUser={getUser} />
        {user && <UserDetails user={user} getUserId={getUserId} />}
      </div>
      {userId && <Posts userId={userId} />}
    </div>
  );
}

export default App;
