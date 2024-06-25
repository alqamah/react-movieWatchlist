import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Movie({ movie, onEdit }) {
  const dispatch = useDispatch();
  const [review, setReview] = useState(movie.review);

  const handleDelete = () => {
    dispatch({ type: 'DELETE_MOVIE', payload: movie.id });
  };

  const handleToggleWatched = () => {
    dispatch({ type: 'TOGGLE_WATCHED', payload: movie.id });
  };

  const handleRating = (rating) => {
    dispatch({ type: 'RATE_MOVIE', payload: { id: movie.id, rating } });
  };

  const handleReview = () => {
    dispatch({ type: 'REVIEW_MOVIE', payload: { id: movie.id, review } });
  };

  return (
    <div className="movie-item">
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
      <div>
        Rating: 
        {[1, 2, 3, 4, 5].map(star => (
          <span 
            key={star} 
            onClick={() => handleRating(star)}
            style={{cursor: 'pointer', color: star <= movie.rating ? 'gold' : 'gray'}}
          >
            ★
          </span>
        ))}
      </div>
      <div>
        <textarea 
          value={review} 
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a review..."
        />
        <button onClick={handleReview}>Save Review</button>
      </div>
      <button onClick={() => onEdit(movie)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggleWatched}>
        Mark as {movie.watched ? 'Unwatched' : 'Watched'}
      </button>
    </div>
  );
}

export default Movie;