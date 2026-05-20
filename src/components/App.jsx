import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch(() => setToys([]));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
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

export default App;
