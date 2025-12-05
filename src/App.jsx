import React from "react";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import { MovieCard } from "./components/MovieCard";

export default function App() {
  const API_BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = import.meta.env.VITE_TIMDB_API_KEY;
  const API_Options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const [searchTerm, setSearchTerm] = React.useState("I am a Batman");
  const [errormessage, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
        API_Options
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      if (response.status === false) {
        setMovies([]);
        return;
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (e) {
      setError("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="Hero Banner" />
            <h1>
              <span className="text-gradient">
                Movies You'll Enjoy Without Hassel
              </span>
            </h1>
          </header>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <section className="all-movies">
            <h2 className="mt-[20px]">All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errormessage ? (
              <p className="text-red-500">{errormessage}</p>
            ) : (
              <ul>
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
          {errormessage && <p className="text-red-500">{errormessage}</p>}
        </div>
      </div>
    </main>
  );
}
