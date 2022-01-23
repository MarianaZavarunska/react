import { React, useState, useEffect } from "react";

import carsService from "../../services/cars.service";
import Car from "./Car";
import "./Cars.css";

const Cars = ({ newCar, setEditedCar }) => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carsService.getAll().then((response) => setCars([...response]));
  }, [newCar]);

  const onDelete = (id) => {
    console.log(cars);
    carsService.delete(id);
    let index = cars.findIndex((i) => i.id === id);
    if (index > -1) {
      cars.splice(index, 1);
      setCars([...cars]);
    }
  };

  return (
    <div className="cars-container">
      {cars.map((car) => (
        <Car
          key={car.id}
          car={car}
          onDelete={onDelete}
          setEditedCar={setEditedCar}
        />
      ))}
    </div>
  );
};

export default Cars;
