import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import carsService from "../../services/cars.service";
import { joiResolver } from "@hookform/resolvers/joi";
import { carValidator } from "../../validators/car.validator";
import "./Form.css";
import axiosService from "../../services/axios.service";

const Form = ({ onUpdateCars, editedCar }) => {
  const { id, model, year, price } = editedCar;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: joiResolver(carValidator), mode: "onTouched" });

  const onSubmitCar = (car) => {
    if (id) {
      carsService
        .updateById(id, car)
        .then((response) => onUpdateCars(response));
    } else {
      carsService.create(car).then((response) => {
        onUpdateCars(response);
      });
    }
  };

  useEffect(() => {
    setValue("model", model);
    setValue("year", year);
    setValue("price", price);
  }, [id]);

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
          <button className="btn">{id ? "Update" : "Create"}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
