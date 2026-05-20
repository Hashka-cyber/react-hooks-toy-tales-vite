import { useEffect, useState } from "react";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

export default function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  return (
    <div className="App">
      <header className="header">
        <h1>Toy Tales</h1>
        <button onClick={() => setShowForm((s) => !s)}>Add a Toy</button>
      </header>
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <ToyContainer
        toys={toys}
        onLike={updateToy}
        onDelete={deleteToy}
      />
    </div>
  );
}
