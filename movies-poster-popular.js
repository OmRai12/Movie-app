document.addEventListener('DOMContentLoaded', async () => {
  const apiKey = 'd6f2f47bd9efef34b8b55e11b339d2e6';
  // const nowplayingMoviesContainer = document.querySelector('.Nowplaying-movies-poster');
  const popularMoviesContainer = document.querySelector('.Popular-movies-poster');

  // try {
  //   const nowPlayingMovies = await fetchNowPlayingMovies(apiKey);
  //   displayMoviePosters(apiKey, nowPlayingMovies, nowplayingMoviesContainer);
  // } catch (error) {
  //   console.error('Error:', error.message);
  // }

  try {
    const popularMovies = await fetchPopularMovies(apiKey);
    displayMoviePosters(apiKey, popularMovies, popularMoviesContainer);
  } catch (error) {
    console.error('Error:', error.message);
  }

 
});

// async function fetchNowPlayingMovies(apiKey) {
//   const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
//   const data = await response.json();
//   return data.results;
// }
 

async function fetchPopularMovies(apiKey) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
}



function displayMoviePosters(apiKey, movies, container) {
  container.innerHTML = ''; // Clear existing posters
  movies.forEach(movie => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const posterElement = document.createElement('div');
    posterElement.classList.add('slide-1');
    posterElement.innerHTML = `<img src="${posterUrl}" alt="${movie.title}">`;
    container.appendChild(posterElement);
  });
}


// function displayMoviePosters(apiKey, movies, container) {
//   container.innerHTML = ''; // Clear existing posters
//   movies.forEach(movie => {
//     const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
//     const posterElement = document.createElement('div');
//     posterElement.classList.add('slide');
//     posterElement.innerHTML = `<img src="${posterUrl}" alt="${movie.title}">`;
//     container.appendChild(posterElement);
//   });
// }

