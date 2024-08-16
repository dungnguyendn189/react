export default function Watched({ movie, handleDeleted }) {
  function onDeleted(id) {
    handleDeleted(id);
  }
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button className="btn-delete" onClick={() => onDeleted(movie.id)}>
          X
        </button>
      </div>
    </li>
  );
}
