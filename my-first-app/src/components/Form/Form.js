import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { joiResolver } from "@hookform/resolvers/joi";

import { createCar, updateCar } from "../../store/cars.slice";
import { carValidator } from "../../validators/car.validator";
import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: joiResolver(carValidator),
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const { car } = useSelector((state) => state["carsReducer"]);

  const onSubmitForm = (data) => {
    car
      ? dispatch(updateCar({ data, id: car.id }))
      : dispatch(createCar({ data }));
    reset();
  };
  useEffect(() => {
    if (car) {
      setValue("model", car.model);
      setValue("price", car.price);
      setValue("year", car.year);
    }
  }, [car]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>{car?.id}</div>
        <div>
          {" "}
          <label> Model:</label>
          <input type="text" {...register("model")} />
        </div>
        {errors.model && (
          <div style={{ color: "red" }}>{errors.model.message}</div>
        )}

        <div>
          <label>Price: </label>
          <input type="number" {...register("price")} />
        </div>
        {errors.price && (
          <div style={{ color: "red" }}>{errors.price.message}</div>
        )}

        <div>
          <label>Year: </label>
          <input type="number" {...register("year")} />
        </div>
        {errors.year && (
          <div style={{ color: "red" }}>{errors.year.message}</div>
        )}

        <button>{car?.id ? "Update" : "Create"}</button>
      </form>
    </>
  );
};

export default Form;
