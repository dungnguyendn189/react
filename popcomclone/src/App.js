import { useEffect, useState } from "react";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResult";
import Box from "./components/Box";
import MoviesList from "./components/MoviesList";
import WatchedHeader from "./components/WatchedHeader";
import WatchedList from "./components/WatchedList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetail from "./components/MovieDetail";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const KEY = "aa369ba8";

export default function App() {
  const [query, setQuery] = useState("test");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  const handleSelectedId = (id) => {
    console.log(id);
    setSelectedId(id);
  };

  useEffect(
    function () {
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );
          if (!res.ok) throw new Error("Fetching Movie failed");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Data not Found");
          setMovies(data.Search);
        } catch (e) {
          console.error("Error fetching movie:", e.message);
          setError(e.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovie();
    },
    [query]
  );

  return (
    <>
      <Header>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults />
      </Header>

      <main className="main">
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MoviesList movies={movies} handleSelectedId={handleSelectedId} />
          )}
        </Box>
        <Box>
          <>
            {selectedId ? (
              <MovieDetail selectedId={selectedId} KEY={KEY} />
            ) : (
              <>
                <WatchedHeader />
                <WatchedList watched={watched} />
              </>
            )}
          </>
        </Box>
      </main>
    </>
  );
}
