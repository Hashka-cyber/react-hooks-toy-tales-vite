import { useState } from "react";

function ToyForm({ addToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name,
      image,
      likes: 0,
    };

    addToy(newToy);

    setName("");
    setImage("");
  }

  return (
    <form
      className="toy-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Toy name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit">
        Create Toy
      </button>
    </form>
  );
}

export default ToyForm;