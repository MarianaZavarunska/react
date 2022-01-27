import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "inc")
    return {
      ...state,
      [`count_${action.payload}`]: state[`count_${action.payload}`]++,
    };

  if (action.type === "dec")
    return {
      ...state,
      [`count_${action.payload}`]: state[`count_${action.payload}`]--,
    };
  if (action.type === "reset")
    return {
      ...state,
      [`count_${action.payload}`]: (state[`count_${action.payload}`] = 0),
    };
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count_1: 0,
    count_2: 0,
    count_3: 0,
  });
  return (
    <div className="wrapper">
      <div className="counter-container">
        <div>{state.count_1}</div>
        <button onClick={() => dispatch({ type: "inc", payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "dec", payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset", payload: 1 })}>
          Reset
        </button>
      </div>
      <div className="counter-container">
        <div>{state.count_2}</div>
        <button onClick={() => dispatch({ type: "inc", payload: 2 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "dec", payload: 2 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset", payload: 2 })}>
          Reset
        </button>
      </div>
      <div className="counter-container">
        <div>{state.count_3}</div>
        <button onClick={() => dispatch({ type: "inc", payload: 3 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "dec", payload: 3 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset", payload: 3 })}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
