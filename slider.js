let flag = 1

function controller(x){
  flag = flag+x;
  slideshow(flag);
}

slideshow(flag);

function slideshow(num){
  let slides = document.getElementsByClassName('slide');
  
  slides[num].style.display = "block";
}