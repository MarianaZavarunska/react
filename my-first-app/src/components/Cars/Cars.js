import React from "react";
import { useSelector } from "react-redux";
import Car from "./Car";

const Cars = () => {
  const { cars } = useSelector((state) => state["carsReducer"]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
