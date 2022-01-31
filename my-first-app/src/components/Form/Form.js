import React, { useEffect } from "react";
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
    setValue,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(carValidator),
    mode: "onTouched",
  });

  const dispatch = useDispatch();
  const { car } = useSelector((state) => state["carsReducer"]);

  useEffect(() => {
    setValue("model", car.model);
    setValue("price", car.price);
    setValue("year", car.year);
  }, [car]);

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

        <button>{car.id ? "Update" : "Create"}</button>
      </form>
    </>
  );
};

export default Form;
