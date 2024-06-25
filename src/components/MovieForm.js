import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function MovieForm({ movie, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      id: movie ? movie.id : Date.now(),
      title,
      description,
      releaseYear,
      genre,
      watched: movie ? movie.watched : false,
      rating: movie ? movie.rating : 0,
      review: movie ? movie.review : ''
    };

    if (movie) {
      dispatch({ type: 'EDIT_MOVIE', payload: movieData });
    } else {
      dispatch({ type: 'ADD_MOVIE', payload: movieData });
    }

    setTitle('');
    setDescription('');
    setReleaseYear('');
    setGenre('');
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Release Year"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <div>
        <button type="submit">{movie ? 'Update Movie' : 'Add Movie'}</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      </div>
    </form>
  );
}

export default MovieForm;