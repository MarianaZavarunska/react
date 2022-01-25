import React from "react";

import "./Character.css";

const Character = ({ character }) => {
  const { name, status, species, gender, image, location } = character;

  return (
    <div className="character-container">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="character-title-container">
        <div>
          Name: <b>{name}</b>
        </div>
        <div>
          Gender: <b>{gender}</b>
        </div>
        <div>
          Species: <b>{species}</b>
        </div>
        <div>
          Status: <b>{status}</b>
        </div>
        <div>
          Location: <b>{location.name}</b>
        </div>
      </div>
    </div>
  );
};

export default Character;
