import React from "react";
import { useForm } from "react-hook-form";

import carsService from "../../services/cars.service";
import { joiResolver } from "@hookform/resolvers/joi";
import { carValidator } from "../../validators/car.validator";
import "./Form.css";

const Form = ({ onUpdateCars }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(carValidator), mode: "onTouched" });

  const onSubmitCar = (car) => {
    carsService.create(car).then((response) => {
      onUpdateCars(response);
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmitCar)}>
        <div>
          <label>
            Model:
            <input type="text" defaultValue={""} {...register("model")} />
          </label>
          {errors.model && (
            <div className="error-container">{errors.model.message}</div>
          )}
        </div>

        <div>
          <label>
            Year:
            <input type="text" defaultValue={""} {...register("year")} />
          </label>
          {errors.year && (
            <div className="error-container">{errors.year.message}</div>
          )}
        </div>
        <div>
          <label>
            Price:
            <input type="text" defaultValue={""} {...register("price")} />
          </label>
          {errors.price && (
            <div className="error-container">{errors.price.message}</div>
          )}
        </div>
        <div>
          <button className="btn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
