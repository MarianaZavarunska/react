import { useState } from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
  const [newCar, setNewCar] = useState(null);
  const [editedCar, setEditedCar] = useState({});

  return (
    <div>
      <Form onUpdateCars={setNewCar} editedCar={editedCar} />
      <Cars newCar={newCar} setEditedCar={setEditedCar} />
    </div>
  );
}

export default App;
