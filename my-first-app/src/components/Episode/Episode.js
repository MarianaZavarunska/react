import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Episode.css";

const Episode = ({ item }) => {
  const { id, name, episode, air_date, characters } = item;
  let navigate = useNavigate();

  const charactersId = [];

  const setCharacters = (characters) => {
    characters &&
      characters.map((character) => {
        let index = character.lastIndexOf("/");
        let id = character.substring(index + 1);
        charactersId.push(id);
      });
  };

  setCharacters(characters);

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
      {/* <Link
        to={{
          pathname: "/character",
          state: { array: charactersId.join(","), message: "test" },
        }}
      >
        Get Details
      </Link> */}
      <button
        onClick={() =>
          navigate("/character", { state: charactersId.join(",") })
        }
      >
        Get Details
      </button>
    </div>
  );
};

export default Episode;
