import React from "react";

const Cats = ({ cat, id }) => {
  return (
    <div>
      {cat}
      <button>Delete</button>
    </div>
  );
};

export default Cats;
