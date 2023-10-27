const nav = document.querySelector(".header"),
searchIcon = document.querySelector(".search-icon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", ()=> {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
});
navCloseBtn.addEventListener("click", ()=> {
  nav.classList.remove("openNav");
})

