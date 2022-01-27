import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import CharacterPage from "./pages/CharacterPage";
import EpisodePage from "./pages/EpisodePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Navigate to={"episode"} />} />
          <Route path={"episode"} element={<EpisodePage />} />
          <Route path={"character"} element={<CharacterPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
