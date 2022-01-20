import "./App.css";
import { Route, Routes } from "react-router-dom";

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import PostCommentsPage from "./pages/PostCommentsPage/PostCommentsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"users"} element={<UsersPage />}>
            <Route path={":id"} element={<UserDetailsPage />}>
              <Route path={"posts"} element={<UserPostsPage />} />
            </Route>
          </Route>
          <Route path={"/posts"} element={<PostsPage />}>
            <Route path={":id"} element={<PostDetailsPage />}>
              <Route path={"comments"} element={<PostCommentsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
