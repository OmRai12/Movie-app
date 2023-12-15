// // Function to display movie information
// function displayMovieInformation(movie) {
//   const movieTitleElement = document.getElementById('movie-title');
//   const movieOverviewElement = document.getElementById('movie-overview');
//   const movieReleaseDateElement = document.getElementById('movie-release-date');
//   const movieVoteAverageElement = document.getElementById('movie-vote-average');

//   movieTitleElement.textContent = movie.title;
//   movieOverviewElement.textContent = movie.overview;
//   movieReleaseDateElement.textContent = `Release Date: ${movie.release_date}`;
//   movieVoteAverageElement.textContent = `Vote Average: ${movie.vote_average}`;
// }

// Fetch now playing movies
async function getNowPlayingMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=d6f2f47bd9efef34b8b55e11b339d2e6`);
  const data = await response.json();
  const movies = data.results;

  const nowPlayingMoviesList = document.getElementById('nowplaying-movies-information');
  nowPlayingMoviesList.innerHTML = ''; // Clear previous results

  movies.forEach((movie) => {
    const movieTitle = movie.title;
    const movieReleaseDate = movie.release_date;
    const movieOverview = movie.overview;

    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `<h2>${movieTitle}</h2>
                           <p>Release Date: ${movieReleaseDate}</p>
                           <p>${movieOverview}</p>`;
    
    // Add click event to show movie information
    movieDiv.addEventListener('click', () => {
      displayMovieInformation(movie);
    });

    nowPlayingMoviesList.appendChild(movieDiv);
  });
}

// Call the getNowPlayingMovies function when the page loads
document.addEventListener('DOMContentLoaded', getNowPlayingMovies);
