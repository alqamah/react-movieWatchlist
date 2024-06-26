import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Movie from './Movie';
import MovieForm from './MovieForm';
import { getPopularMovies, searchMovies } from '../services/movieApi';

function MovieList() {
  const movies = useSelector(state => state.movies.movies);
  const searchResults = useSelector(state => state.movies.searchResults);
  const [editingMovie, setEditingMovie] = useState(null);
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

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };

  const handleAddToWatchlist = (movie) => {
    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        id: movie.imdbid,
        title: movie.title,
        description: movie.description || 'No description available',
        releaseYear: movie.year,
        genre: movie.genre?.join(', ') || 'Unknown',
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
      <h2>My Watchlist</h2>
      {editingMovie ? (
        <MovieForm movie={editingMovie} onCancel={() => setEditingMovie(null)} />
      ) : (
        movies.map(movie => (
          <Movie key={movie.id} movie={movie} onEdit={handleEdit} />
        ))
      )}
      <h2>Search Movies</h2>
      <div>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <button onClick={clearSearch}>Clear Search</button>
      {searchResults && searchResults.length > 0 ? (
        searchResults.map(movie => (
          <div key={movie.imdbid} className="search-result">
            <h3>{movie.title}</h3>
            <p>{movie.description || 'No description available'}</p>
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.genre?.join(', ') || 'Unknown'}</p>
            <button onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</button>
          </div>
        ))
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}

export default MovieList;
