import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form2 = () => {
  const [form, setForm] = useState({});
  const { register, handleSubmit } = useForm();

  const onSubmitForm = (data) => {
    setForm(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input type="text" {...register("username")} defaultValue={""} />
        <input type="number" {...register("age")} defaultValue={1} />
        <button>Save</button>
      </form>
      {JSON.stringify(form)}
    </div>
  );
};

export default Form2;
