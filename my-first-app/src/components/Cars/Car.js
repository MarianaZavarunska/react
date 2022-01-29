import React from "react";
import { useDispatch } from "react-redux";
import { deleteCar } from "../../store/car.slice";

const Car = ({ car: { id, model, year, price } }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px",
      }}
    >
      <div>Model:{model}</div>
      <div>Price:{price}</div>
      <div>Year:{year}</div>
      <button onClick={() => dispatch(deleteCar({ id }))}>Delete</button>
    </div>
  );
};

export default Car;
