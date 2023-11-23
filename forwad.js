document.addEventListener('DOMContentLoaded', function () {
  // Call the showNextPosters function to initially display the first set of posters
  showNextPosters('Nowplaying');
  showNextPosters('Popular');
  // Add similar calls for other sections
});

function showNextPosters(section) {
  const postersContainer = document.querySelector(`.${section}-movies-poster`);
  const posters = postersContainer.querySelectorAll('div');
  const totalPosters = posters.length;
  const postersPerPage = 6; // Number of posters to show per page

  // Get the index of the first visible poster
  let startIndex = 0;
  for (let i = 0; i < totalPosters; i++) {
    if (posters[i].style.display !== 'none') {
      startIndex = i;
      break;
    }
  }

  // Hide all posters
  posters.forEach((poster) => {
    poster.classList.add('poster-hidden');
  });

  // Calculate the new index for the next set of posters
  const newIndex = (startIndex + postersPerPage) % totalPosters;

  // Show the next set of posters
  for (let i = 0; i < postersPerPage; i++) {
    posters[(newIndex + i) % totalPosters].classList.remove('poster-hidden');
  }
}