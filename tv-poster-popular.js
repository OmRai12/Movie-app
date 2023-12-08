document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6'; // Replace with your actual TMDb API key

  // Fetch and display Popular TV shows
  const popularTvContainer = document.querySelector('.Popular-tv-show-poster'); // Change the container class
  try {
    const popularTvShows = await fetchPopularTvShows(apiKey); // Change the fetch function
    displayTvShowPosters(apiKey, popularTvShows, popularTvContainer); // Change the display function
  } catch (error) {
    console.error('Error fetching Popular TV shows:', error.message);
  }
});

async function fetchPopularTvShows(apiKey) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`); // Change the API endpoint
  const data = await response.json();
  return data.results;
}


function displayTvShowPosters(apiKey, tvShows, container) {
  container.innerHTML = ''; // Clear existing posters
  tvShows.forEach(show => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
    const posterElement = document.createElement('div');
    posterElement.classList.add('slide-5'); // Adjust the class accordingly
    posterElement.innerHTML = `<img src="${posterUrl}" alt="${show.name}">`;
    container.appendChild(posterElement);
  });
}