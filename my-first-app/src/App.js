import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Users from "./pages/Users";
import Posts from "./pages/Posts";

function App() {
  return (
    <div>
      <div className="menu-container">
        <div>
          <Link to={"/users"}>Users</Link>
        </div>
        <div>
          <Link to={"/posts"}>Posts</Link>
        </div>
      </div>
      <Routes>
        <Route path={"/users"} element={<Users />}></Route>
        <Route path={"/posts"} element={<Posts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
