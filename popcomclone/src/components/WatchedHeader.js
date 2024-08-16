export default function WatchedHeader({ movie, average, total }) {
  const userRating = movie.filter((movie) => movie.userRating != null);
  const avgUserRating = average(
    userRating.map((userRating) => userRating.userRating)
  );

  const imdbRatingFilter = movie.filter((movie) => movie.imdbRating != null);
  const avgImdbRating = average(
    imdbRatingFilter.map((movie) => movie.imdbRating)
  );

  const totalRuntimeFulter = movie.filter(
    (movie) => movie.runtime != null && !isNaN(movie.runtime)
  );
  const totalRunTime = total(totalRuntimeFulter.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>{movie.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{totalRunTime}</span>
        </p>
      </div>
    </div>
  );
}
