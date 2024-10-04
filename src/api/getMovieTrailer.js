import axios from "axios";

export const getMovieTrailer = async (trailerKey) => {
    const { data } = await axios.get(
        `/movie/${trailerKey}/videos`
    );
    return data;
};
