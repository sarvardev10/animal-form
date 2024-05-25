import React, { useState } from "react";
import Card from "./components/card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [animals, setAnimals] = useState([
    {
      name: "Animals -1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos quasi est! Saepe at tempora unde laudantium sunt! Eum, maiores.",
    },
    {
      name: "Animals -2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos quasi est! Saepe at tempora unde laudantium sunt! Eum, maiores.",
    },
    {
      name: "Animals -3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dignissimos quasi est! Saepe at tempora unde laudantium sunt! Eum, maiores.",
    },
  ]);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleAddAnimal = (event) => {
    event.preventDefault();
    const newAnimal = { name, desc };
    setAnimals([...animals, newAnimal]);
    setName("");
    setDesc("");
  };

  const handleDeleteAnimal = (index) => {
    const newAnimals = animals.filter((_, i) => i !== index);
    setAnimals(newAnimals);
  };

  return (
    <div className="container">
      <h1>Animal List</h1>
      <form onSubmit={handleAddAnimal}>
        <div className="mb-3">
          <label htmlFor="animalName" className="form-label">
            Animal Name
          </label>
          <input
            type="text"
            className="form-control"
            id="animalName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="animalDesc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="animalDesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Animal
        </button>
      </form>

      <div className="row mt-4">
        {animals.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Card
              name={item.name}
              desc={item.desc}
              onDelete={() => handleDeleteAnimal(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
