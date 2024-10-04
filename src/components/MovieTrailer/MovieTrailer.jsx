import { getMovieTrailer } from '@/api/getMovieTrailer';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Popup } from "../Popup/Popup";


export default function MovieTrailer({ isOpen, onClose, movie }) {
  const { data: trailers, isLoading } = useQuery({
    queryFn: () => getMovieTrailer(movie.id),
    queryKey: ["movieTrailer", movie.id],
    enabled: isOpen,
  });
  console.log(trailers);

  const trailer = trailers && trailers.results.find((movie) => movie.site === "YouTube");
  return (
    <Popup onClose={onClose} isOpen={isOpen}>
      {isLoading && <div>Loading...</div>}
      {trailer &&
        <>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}?si=urwXQJF-GzColRg3`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
        </>
      }
    </Popup >
  )
}
