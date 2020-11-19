import popularMoviesRequestQuery from './graphqlRequests/popularMovies';
import searchMoviesRequestQuery from './graphqlRequests/searchMovies';
import movieRequestQuery from './graphqlRequests/movie';
import configurationRequestQuery from './graphqlRequests/configuration';

const backendURL = 'http://localhost:4000/graphql';

const sendGraphqlPOSTRequest = async ({ query, variables }) => {
    return await fetch(
        backendURL, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables }),
        },
    ).then(data => data.json());
};

export const getPopularMovies = async () => {
    const response = await sendGraphqlPOSTRequest({
        query: popularMoviesRequestQuery
    });
    return response.data.movies;
};

export const searchMovies = async (searchQuery) => {
    const response = await sendGraphqlPOSTRequest({
        query: searchMoviesRequestQuery,
        variables: { query: searchQuery },
    });
    return response.data.searchMovies;
};

export const getMovie = async (movieId) => {
    const response = await sendGraphqlPOSTRequest({
        query: movieRequestQuery,
        variables: { id: movieId },
    });
    return response.data.movie || {};
};

export const getConfiguration = async () => {
    const response = await sendGraphqlPOSTRequest({
        query: configurationRequestQuery
    });
    return response.data.configuration;
}