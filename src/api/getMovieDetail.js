import axios from "axios";

export const getMovieDetail = async (movieId) => {
    const { data } = await axios.get(
        `/movie/${movieId}?language=en-US`
    );
    return data;
};
