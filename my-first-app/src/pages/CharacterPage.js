import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Character from "../components/Character/Character";
import cartoonService from "../services/cartoon.service";
import "./Pages.css";

const CharacterPage = () => {
  const [characters, setCharacters] = useState(null);
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    cartoonService
      .getAllCharacters(location.state)
      .then((response) => setCharacters([...response]));
  }, [location.state]);

  return (
    <div className="characters-container">
      <div className="characters-container-title"></div>
      {characters &&
        characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
    </div>
  );
};

export default CharacterPage;
