export async function getnowplayingTVShows() {
  const response = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=d6f2f47bd9efef34b8b55e11b339d2e6`);
  const data = await response.json();
  console.log(data);
  const tvShows = data.results;

  const nowplayingTVShowsList = document.getElementById('nowplaying-tv-list');
  nowplayingTVShowsList.innerHTML = ''; // Clear previous results

  tvShows.forEach((tvShow) => {
      const tvShowTitle = tvShow.name;
      const tvShowFirstAirDate = tvShow.first_air_date;
      const tvShowOverview = tvShow.overview;

      const tvShowDiv = document.createElement('div');
      tvShowDiv.innerHTML = `
          <h2>${tvShowTitle}</h2>
          <p>First Air Date: ${tvShowFirstAirDate}</p>
          <p>${tvShowOverview}</p>
      `;
      nowplayingTVShowsList.appendChild(tvShowDiv);
  });
}

// Call the getPopularTVShows function when the page loads
document.addEventListener('DOMContentLoaded', getnowplayingTVShows);