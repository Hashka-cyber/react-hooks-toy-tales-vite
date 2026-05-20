<<<<<<< HEAD
import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !image) {
      return;
    }

    onAddToy({ name, image });
=======
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

>>>>>>> 5d4c6ad673fc3cadfa9d00c722e1501fb45b25d1
    setName("");
    setImage("");
  }

  return (
<<<<<<< HEAD
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          value={image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(event) => setImage(event.target.value)}
        />
        <br />
        <button type="submit" className="submit">
          Create New Toy
        </button>
      </form>
    </div>
  );
}
=======
    <form className="add-toy-form" onSubmit={handleSubmit}>
      <h3>Create a toy!</h3>
>>>>>>> 5d4c6ad673fc3cadfa9d00c722e1501fb45b25d1

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