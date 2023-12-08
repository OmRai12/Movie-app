document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';

  // Fetch and display TV shows airing today
  const airingTodayTvContainer = document.querySelector('.Airing-today-tv-show-poster');
  try {
    const airingTodayTvShows = await fetchAiringTodayTvShows(apiKey);
    displayTvShowPosters(apiKey, airingTodayTvShows, airingTodayTvContainer);
  } catch (error) {
    console.error('Error fetching TV shows airing today:', error.message);
  }
});

async function fetchAiringTodayTvShows(apiKey) {
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0]; // Format today's date

  const response = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&air_date.gte=${formattedDate}&air_date.lte=${formattedDate}`);
  const data = await response.json();
  return data.results;
}


function displayTvShowPosters(apiKey, tvShows, container) {
  container.innerHTML = ''; // Clear existing posters
  tvShows.forEach(show => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
    const posterElement = document.createElement('div');
    posterElement.classList.add('slide-7'); // Adjust the class accordingly
    posterElement.innerHTML = `<img src="${posterUrl}" alt="${show.name}">`;
    container.appendChild(posterElement);
  });
}
