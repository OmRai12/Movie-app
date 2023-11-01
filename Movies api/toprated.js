const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';

export async function gettopratedMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
  const data = await response.json();
  console.log(data);
  const movies = data.results;
  
  const topratedMoviesList = document.getElementById('top-rated-movie-list');
  topratedMoviesList.innerHTML = ''; // Clear previous results
  
  movies.forEach((movie) => {
    const movieTitle = movie.title;
    const movieReleaseDate = movie.release_date;
    const movieOverview = movie.overview;
    
    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `<h2>${movieTitle}</h2>
                         <p>Release Date: ${movieReleaseDate}</p>
                         <p>${movieOverview}</p>`;
    topratedMoviesList.appendChild(movieDiv);
  });
}

// Call the getPopularMovies function when the page loads
document.addEventListener('DOMContentLoaded', gettopratedMovies);
