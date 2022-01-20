import "./App.css";
import { Route, Routes } from "react-router-dom";

import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Layout from "./components/Layout/Layout";
import UserDetails from "./pages/UserDetails";
import UserPosts from "./components/Users/UserPosts";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"users"} element={<Users />}>
            <Route path={":id"} element={<UserDetails />}>
              <Route path={"posts"} element={<UserPosts />} />
            </Route>
          </Route>
          <Route path={"/posts"} element={<Posts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
