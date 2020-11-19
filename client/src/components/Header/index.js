import './index.css';
import Search from './Search';
import MovieLogo from '../../assets/movieLogo.png';

const Header = ({ homeRedirect, setMovies, resetMovies }) => {
    const homeRedirectWithReset = () => {
        resetMovies(true);
        homeRedirect();
    }

    return (
        <div className='Header'>
            <img className="Header__logo" src={MovieLogo} onClick={homeRedirectWithReset} alt="header" />
            <Search homeRedirect={homeRedirect} setMovies={setMovies} />
        </div>
    )
};

export default Header;