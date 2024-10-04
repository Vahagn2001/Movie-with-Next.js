import { getDailyTrendingMovies } from "@/api/getDailyTrendingMovies";
import { TrendingMovies } from "@/components/TrendingMovies/TrendingMovies";

const HomePage = ({ movies }) => {
  return (
    <main>
      <h1>TMDB</h1>

      <TrendingMovies movies={movies} />
    </main>
  );
};

export async function getServerSideProps() {
  const movies = await getDailyTrendingMovies();

  return {
    props: {
      movies,
    },
  };
}

export default HomePage;
