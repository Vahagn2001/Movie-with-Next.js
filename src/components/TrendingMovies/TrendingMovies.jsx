import React from "react";
import { TrendingMovie } from "../TrendingMovie/TrendingMovie";

export const TrendingMovies = ({ movies }) => {
  return (
    <section>
      <h2>Trending</h2>

      <ul>
        {movies.map((movie) => (
          <TrendingMovie key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};
