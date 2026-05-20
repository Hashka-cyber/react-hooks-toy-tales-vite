import { useEffect, useState } from "react";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleAddToy(newToy) {
    setToys((prev) => [...prev, newToy]);
  }

  function handleDeleteToy(id) {
    setToys((prev) => prev.filter((toy) => toy.id !== id));
  }

  function handleLikeToy(updatedToy) {
    setToys((prev) =>
      prev.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Toy Tales</h1>

        <button onClick={() => setShowForm(!showForm)}>
          Add a Toy
        </button>
      </header>

      {showForm && <ToyForm onAddToy={handleAddToy} />}

      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onLikeToy={handleLikeToy}
      />
    </div>
  );
}

export default App;