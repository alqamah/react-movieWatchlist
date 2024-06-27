import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Movie({ movie, onEdit }) {
  const dispatch = useDispatch();
  const [review, setReview] = useState(movie.review);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch({ type: 'DELETE_MOVIE', payload: movie.id });
    }
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
      <h3 className='app-header'>{movie.title}</h3>
      <p><b>{movie.description}</b></p>
      <p>Release Year: <b>{movie.releaseYear}</b></p>
      <p>Genre: <b>{movie.genre}</b></p>
      <p>Watched: <b>{movie.watched ? 'Yes' : 'No'}</b></p>
      <div>
        Rating: 
        {[1, 2, 3, 4, 5].map(star => (
          <span 
            key={star} 
            onClick={() => handleRating(star)}
            style={{marginLeft: '3px',cursor: 'pointer', color: star <= movie.rating ? 'gold' : 'gray'}}
          >
            ★
          </span>
        ))}
      </div>
      <div>
        <textarea style={{width: '97%', height: '100px', marginTop: '10px'}}
          value={review} 
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write a review..."
        />
        <button onClick={handleReview}>Save Review</button>
      </div>
      <button onClick={() => onEdit(movie)}>Edit</button>
      <button className='del-btn' onClick={handleDelete}>Delete</button>
      <button onClick={handleToggleWatched}>
        Mark as {movie.watched ? 'Unwatched' : 'Watched'}
      </button>
    </div>
  );
}

export default Movie;