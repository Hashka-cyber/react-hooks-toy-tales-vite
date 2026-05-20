function ToyCard({ toy, onDeleteToy, onLikeToy }) {
  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => onLikeToy(updatedToy));
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => onDeleteToy(toy.id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name}</h2>
      <img className="toy-image" src={toy.image} alt={toy.name} />

      <p>{toy.likes} Likes</p>

      <button onClick={handleLike}>Like ❤️</button>

      <button onClick={handleDelete}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;