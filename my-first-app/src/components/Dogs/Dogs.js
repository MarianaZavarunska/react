import React from "react";

import "./Dogs.css";

const Dogs = ({ dog, deleteItemDog }) => {
  return (
    <div className="dog-wrapper">
      <div>{dog.alias}</div>
      <button onClick={() => deleteItemDog(dog.id)}>Delete</button>
    </div>
  );
};

export default Dogs;
