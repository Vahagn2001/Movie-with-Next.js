import { getMovieDetail } from '@/api/getMovieDetail';
import { getImgUrl } from '@/helpers/getImgUrl';
import React from 'react';


export default function MovieDetail({movie}) {
console.log(movie);
  return (
    <>
      <img src={getImgUrl(220, 330, movie.poster_path)} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </>
  )
}
export async function getServerSideProps(request) {

  const movie = await getMovieDetail(request.params.movieId);

  return {
    props: {
      movie,
    },
  };
}
