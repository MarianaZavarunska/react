import { useRoutes } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";

function App() {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "users",
          element: <UsersPage />,
          children: [
            {
              path: ":id",
              element: <UserDetailsPage />,
              children: [
                {
                  path: "posts",
                  element: <UserPostsPage />,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  let element = useRoutes(routes);
  return <div>{element}</div>;
}

export default App;
