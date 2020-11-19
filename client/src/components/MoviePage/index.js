import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import constructConfigurationUrls from '../../utilities/constructConfigurationUrls';
import { getMovie } from '../../api';
import MovieLogo from '../../assets/movieLogo.png';
import InfoItem from './InfoItem';
import './index.css';
  
const MoviePage = ({ configuration }) => {
    let { id } = useParams();
    const [movie, setMovie] = useState({});
    const [movieWithPosterUrl, setMovieWithPosterUrl] = useState(movie);

    useEffect(() => {
        const fetchData = async () => {
            const movie = await getMovie(id);
            setMovie(movie);
        }
        fetchData()
    }, [id]);
    useEffect(() => {
        const updatedMovie = constructConfigurationUrls({ movie, configuration });
        setMovieWithPosterUrl(updatedMovie);
    }, [configuration, movie]);
console.log('movie', movie);
console.log('movieWithPosterUrl',movieWithPosterUrl);
    const {
        title,
        tagline,
        genres = [],
        overview,
        originalLanguage,
        releaseDate,
        runtime,
        voteAverage,
        posterUrl,
        backdropUrl,
    } = movieWithPosterUrl;
    const formattedLanguage = originalLanguage && originalLanguage.toUpperCase();
    const formattedRuntime = runtime && `${runtime} Min.`;

    return (
        <div className="MoviePage">
            <section className="MoviePage__banner">
                <img className="MoviePage__bannerImage" src={backdropUrl || posterUrl || MovieLogo} alt="banner" />
                <h1 className="MoviePage__bannerTitle">{title}</h1>
                <h4 className="MoviePage__bannerTagline">{tagline}</h4>
            </section>
            <section className="MoviePage__infoSection">
                <div className="MoviePage__genreWrapper">
                    {genres.length > 0 && (
                        <>
                        <h4 className="MoviePage__genreTitle">Genres:</h4>
                        <ul className="MoviePage__genreList">
                            {genres.map((genre, index) => <li key={`${genre}${index}`} className="MoviePage__genre">{genre}</li>)}
                        </ul>
                        </>
                    )}
                </div>
                <InfoItem title="Language" details={formattedLanguage} />
                <InfoItem title="Release Date" details={releaseDate} />
                <InfoItem title="Score" details={voteAverage} />
                <InfoItem title="Length" details={formattedRuntime} />
            </section>
            <section className="MoviePage__summarySection">
                <p className="MoviePage__summary">{overview}</p>
            </section>
        </div>
    );
};

export default MoviePage;
  