import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Episode.css";

const Episode = ({ item }) => {
  const { id, name, episode, air_date, characters } = item;
  console.log(id);
  console.log(characters);

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
      <Link to={`${id}/character`} state={charactersId.join(",")}>
        Get Details
      </Link>
    </div>
  );
};

export default Episode;
