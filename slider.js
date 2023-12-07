let nowPlayingIndex = 0;
let popularIndex = 0;
let topratedIndex = 0;
let upcomingIndex = 0;
const postersToShow = 7; // Adjust this number based on your preference

function nowPlayingController(x) {
  nowPlayingIndex += x;
  nowPlayingSlideshow();
}

function popularController(x) {
  popularIndex += x;
  popularSlideshow();
}

function topratedController(x) {
  topratedIndex += x;
  topratedSlideshow();
}

function upcomingController(x) {
  upcomingIndex += x;
  upcomingSlideshow();
}




function nowPlayingSlideshow() {
  let nowPlayingSlides = document.getElementsByClassName('slide');
  showSlides(nowPlayingSlides, nowPlayingIndex);
}

function popularSlideshow() {
  let popularSlides = document.getElementsByClassName('slide-1');
  showSlides(popularSlides, popularIndex);
}

function topratedSlideshow() {
  let topratedSlides = document.getElementsByClassName('slide-2');
  showSlides(topratedSlides, topratedIndex);
}

function upcomingSlideshow() {
  let upcomingSlides = document.getElementsByClassName('slide-3');
  showSlides(upcomingSlides, upcomingIndex);
}



function showSlides(slides, index) {
  // Hide all posters
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Ensure the index stays within the valid range
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }

  // Show the current set of posters
  for (let i = index; i < index + postersToShow; i++) {
    slides[i % slides.length].style.display = "block";
  }
}

// Initial call to display the first set of posters for both sections
nowPlayingSlideshow();
popularSlideshow();
topratedSlideshow();
