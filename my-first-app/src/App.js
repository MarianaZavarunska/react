import { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
  const [newCar, setNewCar] = useState(null);

  return (
    <div>
      <Form onUpdateCars={setNewCar} />
      <Cars newCar={newCar} />
    </div>
  );
}

export default App;
