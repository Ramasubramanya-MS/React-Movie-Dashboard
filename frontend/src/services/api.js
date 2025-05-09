const API_KEY = "bb0071ea"
const BASE_URL = "http://www.omdbapi.com"

const popularTitles = ["Inception", "The Dark Knight", "Titanic", "Forrest Gump", "Avatar"];

export const getPopularMovies = async () => {
  const movies = await Promise.all(
    popularTitles.map(async (title) => {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`);
      const data = await response.json();
      return data;
    })
  );
  return movies;
};

export const searchMovies = async (query) => {
  const response = await fetch(`http://www.omdbapi.com/?apikey=bb0071ea&s=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results; // data.Search is an array of movie objects
};
