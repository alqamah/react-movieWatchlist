const apiKey = '8eff6285';
const apiUrl = 'http://www.omdbapi.com/';

export const searchMovies = async (searchValue) => {
  const url = `${apiUrl}?s=${encodeURIComponent(searchValue)}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error('Error fetching from API:', error);
    throw error;
  }
};

export const getPopularMovies = async () => {
  // Using a popular search term as an example
  return searchMovies('Inception');
};