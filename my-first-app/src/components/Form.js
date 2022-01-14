import React from "react";

import { useState } from "react";
import "./User.css";

const Form = ({ getFiltered }) => {
  const [form, setForm] = useState({ name: "", username: "", email: "" });

  const sendValue = (e) => {
    e.preventDefault();
    getFiltered({ ...form, [e.target.name]: e.target.value });
  };

  const getFormValue = (e) => {
    const data = { ...form, [e.target.name]: e.target.value };
    setForm({ ...form, ...data });
  };

  return (
    <div>
      <form onSubmit={sendValue}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name={"name"}
            value={form.name}
            onChange={getFormValue}
          ></input>
        </div>

        <div>
          <label>Username:</label>
          <input
            type="text"
            name={"username"}
            value={form.username}
            onChange={getFormValue}
          ></input>
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name={"email"}
            value={form.email}
            onChange={getFormValue}
          ></input>
        </div>

        <button className="btn-find">Find</button>
      </form>
    </div>
  );
};

export default Form;
