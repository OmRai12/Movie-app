document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';


  // Fetch and display Top Rated movies
  const topRatedMoviesContainer = document.querySelector('.Top-rated-movies-poster');
  try {
    const topRatedMovies = await fetchTopRatedMovies(apiKey);
    displayMoviePosters(apiKey, topRatedMovies, topRatedMoviesContainer);
  } catch (error) {
    console.error('Error fetching Top Rated movies:', error.message);
  }
});



async function fetchTopRatedMovies(apiKey) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
}

function displayMoviePosters(apiKey, movies, container) {
  container.innerHTML = ''; // Clear existing posters
  movies.forEach(movie => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const posterElement = document.createElement('div');
    posterElement.classList.add('slide-2');
    posterElement.innerHTML = `<img src="${posterUrl}" alt="${movie.title}">`;
    container.appendChild(posterElement);
  });
}
