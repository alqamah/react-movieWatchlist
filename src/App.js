import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Homepage from './components/Homepage';
import MovieSearch from './components/MovieSearch';
import './styles/App.css';
import Navbar from './components/Navbar';

import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/watchlist" element={<MovieList />} />
        <Route path="/explore" element={<MovieSearch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;