import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import EpisodePage from "./pages/EpisodePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"episode"} element={<EpisodePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
