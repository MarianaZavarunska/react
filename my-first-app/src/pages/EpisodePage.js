import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import cartoonService from "../services/cartoon.service";
import Episode from "../components/Episode/Episode";

const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    cartoonService.getAllEpisodes().then((response) => {
      debugger;
      console.log(response);
      setEpisodes([...response.results]);
    });
  }, []);

  return (
    <div>
      <h2>Rick and Mort's Episodes</h2>
      <div>
        {episodes &&
          episodes.map((episode) => (
            <Episode key={episode.id} item={episode} />
          ))}
      </div>
      <Outlet />
    </div>
  );
};

export default EpisodePage;
