import React from "react";
import { useDispatch } from "react-redux";
import { deleteCar, updateCar } from "../../store/cars.slice";

const Car = ({ car }) => {
  const { id, model, price, year } = car;
  const dispatch = useDispatch();
  return (
    <div>
      <div>Model:{model}</div>
      <div>Price:{price}</div>
      <div>Year:{year}</div>
      <button onClick={() => dispatch(updateCar({ car }))}> Edit</button>
      <button onClick={() => dispatch(deleteCar({ id }))}> Delete</button>
    </div>
  );
};

export default Car;
