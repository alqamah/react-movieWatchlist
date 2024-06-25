import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Movie from './Movie';
import MovieForm from './MovieForm';

// const APIKEY = 'api_key=96c05c6f53c2f9b20b3e42af4887dc76';
// const HOMEURL = `https://api.themoviedb.org/3/discover/movie?${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
 const HOMEURL = `http://www.omdbapi.com/?i=tt3896198&apikey=8eff6285`;



function MovieList() {
  const movies = useSelector(state => state.movies.movies);
  const searchResults = useSelector(state => state.movies.searchResults);
  const [editingMovie, setEditingMovie] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      const response = await fetch(HOMEURL);
      const data = await response.json();
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: data.results });
    } catch (error) {
      console.error('Error fetching popular movies:', error);
    }
  };

  const handleEdit = (movie) => {
    setEditingMovie(movie);
  };

  const handleAddToWatchlist = (movie) => {
    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        id: movie.id,
        title: movie.title,
        description: movie.overview,
        releaseYear: new Date(movie.release_date).getFullYear(),
        genre: movie.genre_ids.join(', '), // This is simplified, you might want to map genre_ids to actual genre names
        watched: false,
        rating: 0,
        review: ''
      }
    });
  };

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
      <h2>Search Results</h2>
      {searchResults && searchResults.length > 0 ? (
        searchResults.map(movie => (
          <div key={movie.id} className="search-result">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <button onClick={() => handleAddToWatchlist(movie)}>Add to Watchlist</button>
          </div>
        ))
      ) : (
        <p>No search results available.</p>
      )}
    </div>
  );
}

export default MovieList;