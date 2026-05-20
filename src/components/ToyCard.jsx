function ToyCard({
  toy,
  handleLikes,
  handleDelete,
}) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-image"
      />

      <p>{toy.likes} Likes</p>

      <button
        onClick={() => handleLikes(toy)}
      >
        Like ❤️
      </button>

      <button
        onClick={() => handleDelete(toy.id)}
      >
        Delete 🗑️
      </button>
    </div>
  );
}

export default ToyCard;