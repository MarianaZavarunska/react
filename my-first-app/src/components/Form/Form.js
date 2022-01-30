import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";

import { addCar } from "../../store/cars.slice";
import { carsValidator } from "../../validator/cars.validator";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: joiResolver(carsValidator), mode: "onTouched" });
  const { car } = useSelector((state) => state["carsReducer"]);
  const dispatch = useDispatch();

  const onSubmitForm = (data) => {
    dispatch(addCar({ data, id: car.id }));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label>Model:</label>
        <input type="string" {...register("model")} defaultValue={car.model} />
        {errors.model && (
          <div style={{ color: "red" }}>{errors.model.message}</div>
        )}
        <label>Price:</label>
        <input type="number" {...register("price")} defaultValue={car.price} />
        {errors.price && (
          <div style={{ color: "red" }}>{errors.price.message}</div>
        )}
        <label>Year:</label>
        <input type="number" {...register("year")} defaultValue={car.year} />
        {errors.year && (
          <div style={{ color: "red" }}>{errors.year.message}</div>
        )}
        <button>{car.id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default Form;
