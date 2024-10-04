import axios from "axios";

export const getDailyTrendingMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};
