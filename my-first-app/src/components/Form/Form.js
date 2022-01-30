import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";

import { addCar } from "../../store/cars.slice";
import { carValidator } from "../../validators/car.validator";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(carValidator),
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const { car } = useSelector((state) => state["carsReducer"]);

  const onSubmitForm = (data) => {
    dispatch(addCar({ data, id: car.id }));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>{car.id}</div>
        <div>
          {" "}
          <label> Model:</label>
          <input type="text" {...register("model")} defaultValue={car.model} />
        </div>
        {errors.model && (
          <div style={{ color: "red" }}>{errors.model.message}</div>
        )}

        <div>
          <label>Price: </label>
          <input
            type="number"
            {...register("price")}
            defaultValue={car.price}
          />
        </div>
        {errors.price && (
          <div style={{ color: "red" }}>{errors.price.message}</div>
        )}

        <div>
          <label>Year: </label>
          <input type="number" {...register("year")} defaultValue={car.year} />
        </div>
        {errors.year && (
          <div style={{ color: "red" }}>{errors.year.message}</div>
        )}

        <button>{car.id ? "Update" : "Create"}</button>
      </form>
    </>
  );
};

export default Form;
