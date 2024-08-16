import Watched from "./Watched";

export default function WatchedList({ watched, handleDeleted }) {
  return (
    <ul className="list">
      {watched.map((movie, key) => (
        <Watched movie={movie} handleDeleted={handleDeleted} />
      ))}
    </ul>
  );
}
