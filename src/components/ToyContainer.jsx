import ToyCard from "./ToyCard";

<<<<<<< HEAD
function ToyContainer({ toys, onLike, onDelete }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onLike={onLike} onDelete={onDelete} />
=======
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
>>>>>>> 5d4c6ad673fc3cadfa9d00c722e1501fb45b25d1
      ))}
    </div>
  );
}