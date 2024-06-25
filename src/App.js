import React from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Movie Watchlist</h1>
      <SearchBar />
      <MovieList />
    </div>
  );
}

export default App;