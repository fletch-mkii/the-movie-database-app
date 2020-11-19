import { RESTDataSource } from 'apollo-datasource-rest';
import { moviesSelector, movieSelector, configurationSelector } from './dataSelectors.js';

class theMovieDatabaseAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.TMDB_V3_API_BASE_URL;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', `Bearer ${process.env.TMDB_V4_API_KEY}`);
  }

  async getPopularMovies() {
    const response = await this.get('movie/popular');
    return moviesSelector(response.results)
  }

  async getMovie(id) {
    const response = await this.get(`movie/${id}`);
    return movieSelector(response)
  }

  async searchMovies(query) {
    const response = await this.get(`search/movie?query=${query}`);
    return moviesSelector(response.results)
  }

  async getConfiguration() {
    const response = await this.get('configuration');
    return configurationSelector(response)
  }
}

export default theMovieDatabaseAPI;