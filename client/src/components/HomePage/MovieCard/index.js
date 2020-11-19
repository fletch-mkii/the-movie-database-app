import { useHistory } from 'react-router-dom';
import MovieLogo from '../../../assets/movieLogo.png';
import './index.css';
  
const MovieCard = ({ id, title, posterUrl, goToMovie }) => {
    const history = useHistory();
    const goToMoviePage = () => history.push(`/movie/${id}`);
    return (
        <div className='MovieCard' onClick={goToMoviePage}>
            <div className="MovieCard__posterWrapper">
                <img className="MovieCard__poster" src={posterUrl || MovieLogo} onClick={goToMovie} alt="poster" />
            </div>
            <div className="MovieCard__infoSection">
                <h6 className="MovieCard__title">{title}</h6>
            </div>
        </div>
    );
}

export default MovieCard;