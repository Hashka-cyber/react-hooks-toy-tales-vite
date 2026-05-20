export default function ToyCard({ toy, onLike, onDelete }) {
  function handleLike() {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((res) => res.json())
      .then((updatedToy) => onLike(updatedToy));
  }

  function handleDelete() {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => onDelete(toy.id));
  }

  return (
    <div className="toy-card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} />

      {/* IMPORTANT: match test EXACT spacing */}
      <p>{toy.likes} Likes </p>

      {/* IMPORTANT TEXT MATCH */}
      <button onClick={handleLike}>Like &lt;3</button>

      {/* IMPORTANT TEXT MATCH */}
      <button onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}