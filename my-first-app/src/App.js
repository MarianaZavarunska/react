import "./App.css";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";
import CarsPage from "./pages/CarsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"cars"} element={<CarsPage />} />
          <Route path={"users"} element={<UsersPage />} />
          <Route path={"posts"} element={<PostsPage />} />
          <Route path={"comments"} element={<CommentsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
