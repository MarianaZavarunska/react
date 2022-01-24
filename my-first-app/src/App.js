import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  let nameButtons = ["dog", "cat", "boy", "nature", "notebook", "house"];
  const [btnName, setBtnName] = useState("dog");

  return (
    <div className="container">
      <div className="btn-container">
        {nameButtons &&
          nameButtons.map((btn) => (
            <button key={btn} onClick={() => setBtnName(btn)}>
              {btn}
            </button>
          ))}
      </div>
      <div className="img-container">
        {btnName && <Layout btnName={btnName} />}
      </div>
    </div>
  );
}

export default App;
