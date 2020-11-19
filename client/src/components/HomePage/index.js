import React, { useState, useEffect } from 'react';
import constructConfigurationUrls from '../../utilities/constructConfigurationUrls';
import TitleBanner from './TitleBanner';
import MovieCard from './MovieCard';
import './index.css';
  
const HomePage = ({ movies, configuration }) => {
    const [moviesWithPosterUrl, setMoviesWithPosterUrl] = useState(movies);

    useEffect(() => {
        const updatedMovies = movies.map( movie => constructConfigurationUrls({ movie, configuration }));
        setMoviesWithPosterUrl(updatedMovies);
    }, [configuration, movies]);

    return (
        <div className="HomePage">
            <TitleBanner />
            <div className="HomePage__MovieCardWrapper">
                {moviesWithPosterUrl.map(movie => (
                    <MovieCard key={movie.id} id={movie.id} title={movie.title} posterUrl={movie.posterUrl}/>
                ))}
            </div>
        </div>
    );
};

export default HomePage;