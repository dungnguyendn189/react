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

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const total = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur, 0);
const KEY = "aa369ba8";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectedId = (id) => {
    setSelectedId((selectId) => (selectId === id ? null : id));
  };

  const handleAddDetailMovie = (movie) => {
    setWatched((movies) => [...movies, movie]);
  };
  const handleClose = () => {
    setSelectedId("");
  };
  const handleDeleted = (id) => {
    setWatched((movie) => movie.filter((movie) => movie.id !== id));
  };
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovie() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Fetching Movie failed");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Data not Found");
          setMovies(data.Search);
          setError("");
        } catch (e) {
          if (e.name !== "AboutError") {
            setError(e.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      handleClose();
      fetchMovie();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  useEffect(
    function () {
      function callBack(e) {
        if (e.code === "Escape") {
          handleClose();
        }
      }
      document.addEventListener("keydown", callBack);
      return function () {
        document.removeEventListener("keydown", callBack);
      };
    },
    [handleClose]
  );

  return (
    <>
      <Header>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
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
              <MovieDetail
                selectedId={selectedId}
                KEY={KEY}
                onClose={handleClose}
                onAddMovie={handleAddDetailMovie}
                watched={watched}
              />
            ) : (
              <>
                <WatchedHeader
                  movie={watched}
                  average={average}
                  total={total}
                />
                <WatchedList watched={watched} handleDeleted={handleDeleted} />
              </>
            )}
          </>
        </Box>
      </main>
    </>
  );
}
