import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import UsersPage from "./pages/UsersPage";
import PostsOfUserPage from "./pages/Posts0fUserPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"users"} element={<UsersPage />}>
            <Route path={":id/posts"} element={<PostsOfUserPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
