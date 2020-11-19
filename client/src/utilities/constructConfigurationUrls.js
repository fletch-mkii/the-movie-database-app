const findBiggestSize = sizes =>
    sizes.reduce((biggestSize, currentSize, index) => {
        return index !== sizes.length - 1 ? currentSize : biggestSize;
    }, sizes[sizes.length - 1]);

const constructConfigurationUrls = ({ movie, configuration: { baseUrl, posterSizes, backdropSizes } }) => {
    if (movie && Object.keys(movie).length !== 0 && baseUrl && (posterSizes || backdropSizes)) {
        const posterSize = findBiggestSize(posterSizes);
        const backdropSize = findBiggestSize(backdropSizes);
        const posterPath = movie.posterPath;
        const backdropPath = movie.backdropPath;
        movie.posterUrl = `${baseUrl}${posterSize}${posterPath}`;
        movie.backdropUrl = `${baseUrl}${backdropSize}${backdropPath}`;
    }
    return movie;
}

export default constructConfigurationUrls;