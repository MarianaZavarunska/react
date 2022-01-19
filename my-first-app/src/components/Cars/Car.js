import React from "react";

import "./Cars.css";

const Car = ({ onDelete, car: { id, model, price, year } }) => {
  return (
    <div className="car-container">
      <div>Id: {id}</div>
      <div>Model: {model}</div>
      <div>Year: {year}</div>
      <div>Price: {price}</div>
      <div className="btn-delete">
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Car;
