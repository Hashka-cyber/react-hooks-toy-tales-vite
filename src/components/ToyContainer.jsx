import ToyCard from "./ToyCard";

function ToyContainer({
  toys,
  handleLikes,
  handleDelete,
}) {
  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          handleLikes={handleLikes}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default ToyContainer;