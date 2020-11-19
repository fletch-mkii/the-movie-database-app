const movie = async (_parent, { id }, { dataSources }, _info) => {
    return await dataSources.theMovieDatabaseAPI.getMovie(id);
}

const movies = async (_parent, _args, { dataSources }, _info) => {
    return await dataSources.theMovieDatabaseAPI.getPopularMovies();
}

const searchMovies = async (_parent, { query }, { dataSources }, _info) => {
    return await dataSources.theMovieDatabaseAPI.searchMovies(query);
}

const configuration = async (_parent, _args, { dataSources }, _info ) => {
    return await dataSources.theMovieDatabaseAPI.getConfiguration();
}

export default {
    movie,
    movies,
    searchMovies,
    configuration,
}