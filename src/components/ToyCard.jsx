export default function ToyCard({ toy, onLike, onDelete }) {
  function handleLike() {
    fetch(`http://localhost:3000/toys/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
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
      <p>{toy.likes} Likes </p>
      <button onClick={handleLike}>Like &lt;3</button>
      <button onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}
