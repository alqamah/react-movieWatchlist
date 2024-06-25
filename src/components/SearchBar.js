import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const APIKEY = 'api_key=96c05c6f53c2f9b20b3e42af4887dc76';
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?${APIKEY}&query=`;

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      try {
        const response = await fetch(`${SEARCHAPI}${searchTerm}`);
        const data = await response.json();
        dispatch({ type: 'SET_SEARCH_RESULTS', payload: data.results });
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;