import axios from "axios";

export const getCastsByMovie = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};
