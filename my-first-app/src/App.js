import "./App.css";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;

import React, { useReducer, useRef } from "react";
import CatsDogs from "../CatsDogs/CatsDogs";

import "./Form.css";

const Form = () => {
  const catInput = useRef();
  const dogInput = useRef();

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (action.target === "cat") {
          return { ...state, cats: [...state.cats, action.payload] };
        }
        if (action.target === "dog") {
          return { ...state, dogs: [...state.dogs, action.payload] };
        }
        return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { dogs: [], cats: [] });

  const addDog = (e) => {
    e.preventDefault();
    const newDog = dogInput.current.value;
    dispatch({ type: "add", target: "dog", payload: newDog });
  };
  const addCat = (e) => {
    e.preventDefault();
    const newCat = catInput.current.value;
    dispatch({ type: "add", target: "cat", payload: newCat });
  };

  return (
    <div className="wrapper">
      <div>
        <form>
          <label>Add dog:</label>
          <input type="text" name="dog" ref={dogInput} />
          <button onClick={addDog}>Add</button>
          <label>Add cat:</label>
          <input type="text" name="cat" ref={catInput} />
          <button onClick={addCat}>Add</button>
        </form>
      </div>

      <CatsDogs dogs={state.dogs} cats={state.cats} />
    </div>
  );
};

export default Form;

