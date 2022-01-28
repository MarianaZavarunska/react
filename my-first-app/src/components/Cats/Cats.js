import React from "react";

import "./Cats.css";

const Cats = ({ cat, deleteItemCat }) => {
  return (
    <div className="cat-wrapper">
      <div> {cat.alias} </div>
      <button onClick={() => deleteItemCat(cat.id)}>Delete</button>
    </div>
  );
};

export default Cats;
