import { useEffect, useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // GET REQUEST
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  // POST REQUEST
  function addToy(newToy) {
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((toy) => setToys([...toys, toy]));
  }

  // PATCH REQUEST
  function handleLikes(updatedToy) {
    fetch(`http://localhost:3001/toys/${updatedToy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: updatedToy.likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((newToy) => {
        const updatedToys = toys.map((toy) =>
          toy.id === newToy.id ? newToy : toy
        );

        setToys(updatedToys);
      });
  }

  // DELETE REQUEST
  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() => {
      const filteredToys = toys.filter((toy) => toy.id !== id);
      setToys(filteredToys);
    });
  }

  return (
    <div className="App">
      <Header
        showForm={showForm}
        setShowForm={setShowForm}
      />

      {showForm ? (
        <ToyForm addToy={addToy} />
      ) : null}

      <ToyContainer
        toys={toys}
        handleLikes={handleLikes}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;