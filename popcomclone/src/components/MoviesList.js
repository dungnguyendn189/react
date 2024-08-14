import Movie from "./Movie";

export default function MoviesList({ movies, handleSelectedId }) {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <Movie movie={movie} handleSelectedId={handleSelectedId} />
      ))}
    </ul>
  );
}
