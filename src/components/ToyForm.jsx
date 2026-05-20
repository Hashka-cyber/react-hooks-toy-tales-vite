import { useState } from "react";

export default function ToyForm({ addToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name,
      image,
      likes: 0,
    };

    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((createdToy) => addToy(createdToy));

    setName("");
    setImage("");
  }

  return (
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <h3>Create a toy!</h3>

      <input
        name="name"
        placeholder="Enter a toy's name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        name="image"
        placeholder="Enter a toy's image URL..."
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input type="submit" value="Create New Toy" />
    </form>
  );
}