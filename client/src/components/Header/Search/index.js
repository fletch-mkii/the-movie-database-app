import { useState } from 'react';
import { searchMovies } from '../../../api';
import searchIcon from '../../../assets/searchIcon.svg';
import './index.css';
  
const Search = ({ homeRedirect, setMovies }) => {
    const [query, setQuery] = useState('');

    const handleQueryChange = ({ target }) => setQuery(target.value);

    const performSearch = async (event) => {
        event.preventDefault();
        const movies = await searchMovies(query);
        setMovies(movies);
        setQuery('');
        homeRedirect();
    }
    return (
        <div className='Search'>
            <p className="Search__title">Search</p>
            <form className="Search__InputWrapper" onSubmit={performSearch}>
                <input className="Search__Input" value={query} onChange={handleQueryChange} />
                <img src={searchIcon} className="Search__icon" onClick={performSearch} alt="search" />
            </form>
        </div>
    )
};

export default Search;