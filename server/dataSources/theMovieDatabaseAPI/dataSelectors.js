const extractGenres = rawMovieData => rawMovieData.genres && rawMovieData.genres.map(genre => genre.name)

export const movieSelector = rawMovieData => ({
    id: rawMovieData.id,
    title: rawMovieData.title,
    overview: rawMovieData.overview,
    posterPath: rawMovieData.poster_path,
    backdropPath: rawMovieData.backdrop_path,
    originalLanguage: rawMovieData.original_language,
    releaseDate: rawMovieData.release_date,
    runtime: rawMovieData.runtime,
    tagline: rawMovieData.tagline,
    voteAverage: rawMovieData.vote_average,
    genres: extractGenres(rawMovieData),
})

export const moviesSelector = rawMoviesList => rawMoviesList.map(movie => movieSelector(movie))

export const configurationSelector = rawConfigurationData => ({
    baseUrl: rawConfigurationData.images.base_url,
    posterSizes: rawConfigurationData.images.poster_sizes,
    backdropSizes: rawConfigurationData.images.backdrop_sizes,
})