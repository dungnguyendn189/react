import { useEffect, useState } from "react";
import Loader from "./Loader";
import Staring from "./Staring";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

export default function MovieDetail({
  selectedId,
  KEY,
  onClose,
  onAddMovie,
  watched,
}) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState();

  const {
    imdbID,
    Title: title,
    Runtime: runtime,
    Director: director,
    Plot: plot,
    Poster: poster,
    Released: released,
    Actors: actors,
    imdbRating,
  } = movie;

  const handleAddDetaiMovie = () => {
    const newMovie = {
      imdbID: selectedId,
      title,
      runtime,
      director,
      poster,
      plot,
      released,
      actors,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddMovie(newMovie);
    onClose();
  };
  const isEquals = watched.map((movie) => movie.imdbID).includes(selectedId);

  useEffect(function () {
    if (!title) return;
    document.title = `Movie|${title}`;
  });

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
          );
          const data = await res.json();
          setMovie(data);
          setIsLoading(false);
        } catch (e) {}
      }
      getMovieDetails();
    },
    [selectedId]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onClose}>
              {" "}
              🎗️
            </button>

            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>
                <span>⭐</span> {imdbRating} IMDB rating
              </p>
            </div>
          </header>
          <section>
            {!isEquals && (
              <div className="rating">
                <Staring maxRating={10} setRating={setUserRating} />
                <button className="btn-add" onClick={handleAddDetaiMovie}>
                  + Add to list
                </button>
              </div>
            )}

            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Direction By {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
