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

<<<<<<< HEAD
function ToyCard({ toy, onLike, onDelete }) {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={() => onLike(toy)}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={() => onDelete(toy)}>
        Donate to GoodWill
      </button>
=======
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
>>>>>>> 5d4c6ad673fc3cadfa9d00c722e1501fb45b25d1
    </div>
  );
}