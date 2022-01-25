import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import cartoonService from "../services/cartoon.service";

const CharacterPage = () => {
  const [characters, setCharacters] = useState(null);
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    cartoonService
      .getAllCharacters(state)
      .then((response) => setCharacters([...response]));
  }, [state]);

  return (
    <div>
      {" "}
      CharacterPage
      {characters &&
        characters.map((character) => (
          <p key={character.id}>{character.name}</p>
        ))}
    </div>
  );
};

export default CharacterPage;
