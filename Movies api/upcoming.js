
const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';

export async function getupcomingMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`);
  const data = await response.json();
  console.log(data);
  const movies = data.results;
  
  const upcomingMoviesList = document.getElementById('upcoming-movies-list');
  upcomingMoviesList.innerHTML = ''; // Clear previous results
  
  movies.forEach((movie) => {
    const movieTitle = movie.title;
    const movieReleaseDate = movie.release_date;
    const movieOverview = movie.overview;
    
    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `<h2>${movieTitle}</h2>
                         <p>Release Date: ${movieReleaseDate}</p>
                         <p>${movieOverview}</p>`;
    upcomingMoviesList.appendChild(movieDiv);
  });
}

document.addEventListener('DOMContentLoaded', getupcomingMovies);

