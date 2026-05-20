<<<<<<< HEAD
import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
=======
import { useEffect, useState } from "react";
>>>>>>> 5d4c6ad673fc3cadfa9d00c722e1501fb45b25d1
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

<<<<<<< HEAD
function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch(() => setToys([]));
  }, []);
=======
export default function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(true);
>>>>>>> 5d4c6ad673fc3cadfa9d00c722e1501fb45b25d1

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function addToy(newToy) {
    setToys((prev) => [...prev, newToy]);
  }

  function updateToy(updatedToy) {
    setToys((prev) =>
      prev.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  function deleteToy(id) {
    setToys((prev) => prev.filter((toy) => toy.id !== id));
  }

  function handleAddToy(toyData) {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...toyData, likes: 0 }),
    })
      .then((response) => response.json())
      .then((newToy) => setToys((toys) => [...toys, newToy]));
  }

  function handleLikeToy(toy) {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((response) => response.json())
      .then((updatedToy) =>
        setToys((toys) => toys.map((item) => (item.id === updatedToy.id ? updatedToy : item)))
      );
  }

  function handleDeleteToy(toy) {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => setToys((toys) => toys.filter((item) => item.id !== toy.id)));
  }

  return (
<<<<<<< HEAD
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onLike={handleLikeToy} onDelete={handleDeleteToy} />
    </>
  );
}
=======
    <div className="App">
      <header className="header">
        <h1>Toy Tales</h1>
        <button onClick={() => setShowForm((s) => !s)}>Add a Toy</button>
      </header>
>>>>>>> 5d4c6ad673fc3cadfa9d00c722e1501fb45b25d1

      {showForm && <ToyForm addToy={addToy} />}

      <ToyContainer
        toys={toys}
        onLike={updateToy}
        onDelete={deleteToy}
      />
    </div>
  );
}