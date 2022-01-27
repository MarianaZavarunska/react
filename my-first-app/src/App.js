import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import UsersPage from "./pages/UsersPage";
import PostsOfUserPage from "./pages/Posts0fUserPage";
import CommentsOfPostPage from "./pages/CommentsOfPostPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"users"} element={<UsersPage />}>
            <Route path={":id/posts"} element={<PostsOfUserPage />}>
              <Route
                path={":postId/comments"}
                element={<CommentsOfPostPage />}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
