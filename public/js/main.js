const harm = document.querySelector(".nav__harm");
const body = document.querySelector("body");
const nav = document.querySelector(".nav");
const overly = document.querySelector(".overlay");
let mob_nav = document.querySelector(".mobile_nav");
let harmOpen = false;

harm.addEventListener("click", () => {
  if (!harmOpen) {
    harm.classList.add("open");
    overly.style.display = "block";
    body.classList.add("noscroll");
    harmOpen = true;
  } else {
    harm.classList.remove("open");
    overly.style.display = "none";
    body.classList.remove("noscroll");
    harmOpen = false;
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
