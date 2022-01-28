import React from "react";

const Dogs = ({ dog, id, deleteItemDog }) => {
  return (
    <div>
      {dog} {id}
      <button onClick={() => deleteItemDog(id)}>Delete</button>
    </div>
  );
};

export default Dogs;
