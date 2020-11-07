gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#navbar", {
    color: "#FFFFFF"
  }, {
    scrollTrigger: {
      trigger: "#body",
      start: "top 10%",
      end: "top top",
      scrub: 0.5
    },
    background: "#FFFFFF",
    color: "#4a5568",
    boxShadow: "0px 0.5px 4px 1px rgba(138,138,138,0.2)"
  }
)

let htmlElement = document.querySelector('html');
let bodyElement = document.querySelector('body');
let overlayElement = document.querySelector('#overlay');

function disableScroll() {
  htmlElement.style.overflow = 'hidden';
  bodyElement.style.overflow = 'hidden';
}

function enableScroll() {
  htmlElement.style.overflow = '';
  bodyElement.style.overflow = '';
}

let navBurger = document.getElementById("navburger");
let navClose = document.getElementById("navclose");

navBurger.addEventListener("click", function(){
  // disableScroll();
  overlayElement.classList.add("visible");
  document.getElementById("navmenu").style.width = "60%";
});

navClose.addEventListener("click", function(){
  // enableScroll();
  overlayElement.classList.remove("visible");
  document.getElementById("navmenu").style.width = "0";
});
