import React, { useState } from "react";
import { formatDate } from "@/helpers/formatDate";
import { MovieCastPopup } from "../MovieCastPopup/MovieCastPopup";
import { getImgUrl } from "@/helpers/getImgUrl";
import Link from "next/link";
import MovieTrailer from "../MovieTrailer/MovieTrailer";

export const TrendingMovie = ({ movie, trailerKey }) => {
  const [isOpenShowCast, setIsOpenShowCast] = useState(false);
  const [isOpenShowTrailer, setIsOpenShowTrailer] = useState(false);

  return (
    <li>
      <img src={getImgUrl(220, 330, movie.backdrop_path)} alt={movie.title} />
      <h3>{movie.title}</h3>
      <div>{formatDate(movie.release_date)}</div>
      <button type="button" onClick={() => setIsOpenShowCast(true)}>
        Show Cast
      </button>
      <button type="button" onClick={() => setIsOpenShowTrailer(true)}>
        Show Trailer
      </button>
      <Link href={`/movie/${movie.id}`}>Show Details</Link>
      <MovieTrailer
        isOpen={isOpenShowTrailer}
        onClose={() => setIsOpenShowTrailer(false)}
        movie={movie}
      />
      <MovieCastPopup
        isOpen={isOpenShowCast}
        onClose={() => setIsOpenShowCast(false)}
        movie={movie}
      />
    </li>
  );
};
