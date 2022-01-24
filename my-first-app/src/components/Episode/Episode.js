import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Episode.css";

const Episode = ({ item }) => {
  const { name, episode, air_date } = item;
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="episode-container">
      <div>{name}</div>
      <div>
        <b>Episode:</b> {episode}
      </div>
      <div>
        <b>Air Date: </b>
        {air_date}
      </div>
      {/* <Link to={"character"}>Get Details</Link> */}
    </div>
  );
};

export default Episode;
