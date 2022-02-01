import React, { useRef } from "react";

const Form = ({ dispatch }) => {
  const catInput = useRef();
  const dogInput = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  const onSaveCat = () => {
    dispatch({ type: "ADD_CAT", payload: { cat: catInput.current.value } });
  };
  const onSaveDog = () => {
    dispatch({ type: "ADD_DOG", payload: { dog: dogInput.current.value } });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" placeholder="cat" ref={catInput} />
        <button onClick={onSaveCat}>Save</button>
        <input type="text" placeholder="dog" ref={dogInput} />
        <button onClick={onSaveDog}>Save</button>
      </form>
    </div>
  );
};

export { Form };
