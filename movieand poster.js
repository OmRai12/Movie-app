document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';
  const nowplayingMoviesContainer = document.querySelector('#nowplaying-poster');

  try {
    const nowPlayingMovies = await fetchNowPlayingMovies(apiKey);
    displayMoviePosters(apiKey, nowPlayingMovies, nowplayingMoviesContainer);
  } catch (error) {
    console.error('Error:', error.message);
  }
});

async function fetchNowPlayingMovies(apiKey) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
}

function displayMoviePosters(apiKey, movies, container) {
  container.innerHTML = ''; // Clear existing posters
  movies.forEach(movie => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const posterElement = document.createElement('div');
    posterElement.classList.add('slide');
    posterElement.innerHTML = `<img src="${posterUrl}" alt="${movie.title}" onclick="showMovieDetails(${movie.id})">`;
    container.appendChild(posterElement);
  });
}

async function showMovieDetails(movieId) {
  const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`);
  const movieDetails = await response.json();
  console.log('Movie Details:', movieDetails);

  // You can now display the movie details in a modal or another section on your page
  // Update the code according to your specific design and requirements
}