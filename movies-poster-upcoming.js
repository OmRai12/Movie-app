document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';

  // Fetch and display Upcoming movies
  const upcomingMoviesContainer = document.querySelector('.Upcoming-movies-poster');
  try {
    const upcomingMovies = await fetchUpcomingMovies(apiKey);
    displayMoviePosters(apiKey, upcomingMovies, upcomingMoviesContainer);
  } catch (error) {
    console.error('Error fetching Upcoming movies:', error.message);
  }
});

async function fetchUpcomingMovies(apiKey) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
}

// The displayMoviePosters function remains the same
function displayMoviePosters(apiKey, movies, container) {
  container.innerHTML = ''; // Clear existing posters
  movies.forEach(movie => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const posterElement = document.createElement('div');
    posterElement.classList.add('slide-3');
    posterElement.innerHTML = `<img src="${posterUrl}" alt="${movie.title}">`;
    container.appendChild(posterElement);
  });
}
