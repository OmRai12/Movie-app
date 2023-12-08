// Add this code to your existing script or create a new script
document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';

  // Fetch and display Now Playing TV shows
  const nowPlayingTvContainer = document.querySelector('.Nowplaying-tv-show-poster');
  try {
    const nowPlayingTvShows = await fetchNowPlayingTvShows(apiKey);
    displayTvShowPosters(apiKey, nowPlayingTvShows, nowPlayingTvContainer);
  } catch (error) {
    console.error('Error fetching Now Playing TV shows:', error.message);
  }
});

async function fetchNowPlayingTvShows(apiKey) {
  const response = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
}

// The displayTvShowPosters function
function displayTvShowPosters(apiKey, tvShows, container) {
  container.innerHTML = ''; // Clear existing posters
  tvShows.forEach(show => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
    const posterElement = document.createElement('div');
    posterElement.classList.add('slide-4'); // Adjust the class accordingly
    posterElement.innerHTML = `<img src="${posterUrl}" alt="${show.name}">`;
    container.appendChild(posterElement);
  });
}
