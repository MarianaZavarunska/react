import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ username: "", age: 1 });

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" name="username" onChange={onChangeForm} />
        <input type="number" name="age" onChange={onChangeForm} />
        <button>Save</button>
      </form>
      {JSON.stringify(form)}
    </div>
  );
};

export default Form;
