import React, { useReducer, useRef } from "react";

import Cats from "../Cats/Cats";
import Dogs from "../Dogs/Dogs";
import "./Forms.css";

const Form = () => {
  const catInput = useRef();
  const dogInput = useRef();

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (action.target === "cat") {
          return {
            ...state,
            cats: [
              ...state.cats,
              {
                id: state.cats.length,
                alias: action.payload,
              },
            ],
          };
        }
        if (action.target === "dog") {
          return {
            ...state,
            dogs: [
              ...state.dogs,
              {
                id: state.dogs.length,
                alias: action.payload,
              },
            ],
          };
        }
        return state;
      case "filter":
        if (action.target === "cat") {
          return {
            ...state,
            cats: [...state.cats.filter((cat) => cat.id !== action.catId)],
          };
        }
        if (action.target === "dog") {
          return {
            ...state,
            dogs: [...state.dogs.filter((dog) => dog.id !== action.dogId)],
          };
        }
        return state;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    dogs: [],
    cats: [],
  });

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

  const deleteItemDog = (id) => {
    dispatch({ type: "filter", target: "dog", dogId: id });
  };
  const deleteItemCat = (id) => {
    dispatch({ type: "filter", target: "cat", catId: id });
  };
  return (
    <div className="wrapper">
      <form className="form-wrapper">
        <div>
          <label>Add dog:</label>
          <input type="text" name="dog" ref={dogInput} />
          <button onClick={addDog}>Add</button>
        </div>

        <div>
          <label>Add cat:</label>
          <input type="text" name="cat" ref={catInput} />
          <button onClick={addCat}>Add</button>
        </div>
      </form>
      <div className="components-wrapper">
        <div>
          {state.dogs &&
            state.dogs.map((dog) => (
              <Dogs key={dog.id} dog={dog} deleteItemDog={deleteItemDog} />
            ))}
        </div>
        <div>
          {state.cats &&
            state.cats.map((cat) => (
              <Cats key={cat.id} cat={cat} deleteItemCat={deleteItemCat} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
