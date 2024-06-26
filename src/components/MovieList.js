import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Movie from './Movie';
import MovieForm from './MovieForm';
import { getPopularMovies, searchMovies } from '../services/movieApi';

function MovieList() {
  const movies = useSelector(state => state.movies.movies);
  const [editingMovie, setEditingMovie] = useState(null);
  const dispatch = useDispatch();
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

  return (
    <div>
      <h2>My Watchlist</h2>
      <h3>List of movies added to the watchlist</h3>
      {editingMovie ? (
        <MovieForm movie={editingMovie} onCancel={() => setEditingMovie(null)} />
      ) : (
        movies.map(movie => (
          <Movie key={movie.id} movie={movie} onEdit={handleEdit} />
        ))
      )}

    </div>
  );
}

export default MovieList;
