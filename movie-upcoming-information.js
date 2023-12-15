async function getupcomingMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d6f2f47bd9efef34b8b55e11b339d2e6`);
  const data = await response.json();
  console.log(data);
  const movies = data.results;
  
  const upcomingMoviesList = document.getElementById('upcoming-movies-list');
  upcomingMoviesList.innerHTML = ''; // Clear previous results
  
  movies.forEach((movie) => {
    const movieTitle = movie.title;
    const movieReleaseDate = movie.release_date;
    const movieOverview = movie.overview;

    // Create the HTML structure for each movie
    const movieDiv = document.createElement('div');
    movieDiv.innerHTML = `<h2>${movieTitle}</h2>
                         <p>Release Date: ${movieReleaseDate}</p>
                         <p>${movieOverview}</p>`;

    // Append the movie HTML structure to the upcomingMoviesList
    upcomingMoviesList.appendChild(movieDiv);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded!');
  getupcomingMovies();
});
