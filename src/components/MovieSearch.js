import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPopularMovies, searchMovies } from '../services/movieApi';
import '../styles/MovieSearch.css'

function MovieSearch() {
  const searchResults = useSelector(state => state.movies.searchResults);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPopularMovies();
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: data });
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      setError('Failed to fetch movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchMovies(searchValue);
      console.log(data);
      if (data.length === 0) {
        setError('No movies found. Try a different search term.');
      } else {
        dispatch({ type: 'SET_SEARCH_RESULTS', payload: data });
      }
    } catch (error) {
      console.error('Error searching movies:', error);
      setError('Failed to search movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToWatchlist = (movie) => {
    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        id: movie.imdbID,
        title: movie.Title,
        description: movie.Plot || 'No description available',
        releaseYear: movie.Year,
        genre: movie.Genre?.join(', ') || 'Unknown',
        watched: false,
        rating: 0,
        review: ''
      }
    });
  };

  const clearSearch = () => {
    setSearchValue('');
    dispatch({ type: 'CLEAR_SEARCH_RESULTS' });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Search Movies</h2>
      <h3>Search for any movie globally</h3>
      <div className='search-container'>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={clearSearch}>Clear Search</button>
      </div>
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((movie, index) => (
          <div key={index} className="search-result">
            <h3>{movie.Title}</h3>
            <p>{movie.Plot || 'No description available'}</p>
            <p>Year: {movie.Year}</p>
            <p>Genre: {movie.Genre?.join(', ') || 'Unknown'}</p>
            <button onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</button>
          </div>
        ))
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}

export default MovieSearch;
