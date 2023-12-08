let nowPlayingIndexTV = 0;
let popularIndexTV = 0;
let topratedIndexTV = 0;
let upcomingIndexTV = 0;

function nowPlayingControllerTV(x) {
  nowPlayingIndexTV += x;
  nowPlayingSlideshowTV();
}

function popularControllerTV(x) {
  popularIndexTV += x;
  popularSlideshowTV();
}

function topratedControllerTV(x) {
  topratedIndexTV += x;
  topratedSlideshowTV();
}

function upcomingControllerTV(x) {
  upcomingIndexTV += x;
  upcomingSlideshowTV();
}

function nowPlayingSlideshowTV() {
  let nowPlayingSlidesTV = document.getElementsByClassName('slide-4');
  showSlides(nowPlayingSlidesTV, nowPlayingIndexTV);
}

function popularSlideshowTV() {
  let popularSlidesTV = document.getElementsByClassName('slide-5');
  showSlides(popularSlidesTV, popularIndexTV);
}

function topratedSlideshowTV() {
  let topratedSlidesTV = document.getElementsByClassName('slide-6');
  showSlides(topratedSlidesTV, topratedIndexTV);
}

function upcomingSlideshowTV() {
  let upcomingSlidesTV = document.getElementsByClassName('slide-7');
  showSlides(upcomingSlidesTV, upcomingIndexTV);
}
