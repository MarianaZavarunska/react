import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import cartoonService from "../services/cartoon.service";

const CharacterPage = () => {
  const [characters, setCharacter] = useState([]);
  const { id } = useParams();

  const location = useLocation();
  console.log(location);
  // useEffect(() => {
  //   cartoonService
  //     .getAllCharacters(id)
  //     .then((response) => setCharacter([...response]));
  // }, [id]);

  return (
    <div>
      {" "}
      CharacterPage
      {/* {characters &&
        characters.map((character) => (
          <p key={character.id}>{character.name}</p>
        ))} */}
    </div>
  );
};

export default CharacterPage;
