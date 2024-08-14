import { useEffect, useState } from "react";
import Loader from "./Loader";
import Staring from "./Staring";

export default function MovieDetail({ selectedId, KEY }) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        } catch (e) {
          console.log(e.message);
        }
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
            <button className="btn-back"> 🎗️</button>

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
            <div className="rating">
              <Staring />
            </div>

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
