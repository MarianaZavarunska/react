import React from "react";
import { useDispatch } from "react-redux";
import { deleteCar, update } from "../../store/cars.slice";

const Car = ({ car }) => {
  const { id, model, price, year } = car;
  const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "200px",
        margin: "10px",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <div> id: {id}</div>
      <div> Model: {model}</div>
      <div>Price:{price}</div>
      <div>Year:{year}</div>
      <button onClick={() => dispatch(deleteCar({ id }))}>Delete</button>
      <button onClick={() => dispatch(update({ car }))}>Edit</button>
    </div>
  );
};

export default Car;
