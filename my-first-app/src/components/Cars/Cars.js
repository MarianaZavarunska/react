import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../../store/cars.slice";

import Car from "./Car";

const Cars = () => {
  const { cars, status, error } = useSelector((state) => state["carsReducer"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {status === "pending" && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
