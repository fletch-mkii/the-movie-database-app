import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import { getPopularMovies, getConfiguration } from '../../api';
import constructConfigurationUrls from '../../utilities/constructConfigurationUrls';
import Header from '../Header';
import HomePage from '../HomePage';
import MoviePage from '../MoviePage';
import './index.css';

const App = () => { 
  let history = useHistory();
  const [movies, setMovies] = useState([]);
  const [configuration, setConfiguration] = useState({
    baseUrl: '',
    posterSizes: [],
    backdropSizes: [],
  });
  const [shouldResetMovies, setShouldResetMovies] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const config = await getConfiguration();
      setConfiguration(config);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setShouldResetMovies(false);
      const popularMovies = await getPopularMovies();
      const moviesWithConfigurationUrls = popularMovies.map(movie => constructConfigurationUrls({ movie, configuration }));
      setMovies(moviesWithConfigurationUrls);
    }
    fetchData();
  }, [shouldResetMovies, configuration]);

  const homeRedirect = () => {
    shouldResetMovies && setShouldResetMovies(true);
    history.push('/');
  };

  return (
    <div className='App'>
      <Header homeRedirect={homeRedirect} setMovies={setMovies} resetMovies={setShouldResetMovies} />
      <Switch>
        <Route exact path='/movie/:id' render={() => <MoviePage configuration={configuration} />} />
        <Route exact path='/' render= {() => <HomePage movies={movies} configuration={configuration} />} />
        <Redirect to='/' />
      </Switch>
    </div>
  )
};

export default App;
