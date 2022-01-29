import React from "react";
import { useSelector } from "react-redux";

import Car from "./Car";

const Cars = () => {
  const { cars } = useSelector((state) => state["carReducer"]);
  return (
    <div>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default Cars;
