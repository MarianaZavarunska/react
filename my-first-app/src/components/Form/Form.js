import React, { useReducer, useRef } from "react";
import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";

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

      {state.cats && state.cats.map((cat) => <Cats cat={cat} />)}
      {state.dogs && state.dogs.map((dog) => <Dogs dog={dog} />)}
    </div>
  );
};

export default Form;
