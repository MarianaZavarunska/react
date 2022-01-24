import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import cartoonService from "../services/cartoon.service";
import Episode from "../components/Episode/Episode";
import "./Pages.css";

const EpisodePage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    cartoonService.getAllEpisodes(page).then((response) => {
      setEpisodes([...response.results]);
    });
  }, [page]);

  return (
    <div>
      <div className="title-container">Rick and Morty's Episodes</div>
      <div className="episodes-container">
        {episodes &&
          episodes.map((episode) => (
            <Episode key={episode.id} item={episode} />
          ))}
        <div className="btn-navigation">
          <button
            onClick={() =>
              setPage((prevPage) =>
                prevPage >= 1 && prevPage < 3 ? prevPage + 1 : 3
              )
            }
          >
            Next
          </button>
          <button
            onClick={() =>
              setPage((prevPage) =>
                prevPage > 1 && prevPage <= 3 ? prevPage - 1 : 1
              )
            }
          >
            Prev
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default EpisodePage;
