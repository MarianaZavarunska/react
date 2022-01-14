import "./App.css";

import Form from "./components/Form";
import Users from "./components/Users";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFiltered] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users);
        setFiltered(users);
      });
  }, []);

  const getFiltered = (data) => {
    let filteredList = [...users];

    if (data.name)
      filteredList = filteredList.filter((user) =>
        user.name.toLowerCase().includes(data.name.toLowerCase())
      );

    if (data.username)
      filteredList = filteredList.filter((user) =>
        user.username.toLowerCase().includes(data.username.toLowerCase())
      );

    if (data.email)
      filteredList = filteredList.filter((user) =>
        user.email.toLowerCase().includes(data.email.toLowerCase())
      );
    setFiltered(filteredList);
  };

  return (
    <div>
      <Form getFiltered={getFiltered} />
      <Users users={filteredUsers} />
    </div>
  );
}

export default App;
