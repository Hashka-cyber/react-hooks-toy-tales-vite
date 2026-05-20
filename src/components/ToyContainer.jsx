import ToyCard from "./ToyCard";

export default function ToyContainer({ toys, onLike, onDelete }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}