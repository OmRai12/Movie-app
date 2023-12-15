const popularMoviePosters = document.querySelectorAll('.Popular-movies-poster .movie-poster-container');

popularMoviePosters.forEach(poster => {
  poster.addEventListener('mouseover', () => {
    const movieInfo = poster.querySelector('.movie-info');
    movieInfo.style.display = 'block';
  });

  poster.addEventListener('mouseout', () => {
    const movieInfo = poster.querySelector('.movie-info');
    movieInfo.style.display = 'none';
  });
});