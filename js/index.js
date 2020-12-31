gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  "#navbar", {
    color: "#FFFFFF"
  }, {
    scrollTrigger: {
      trigger: "#body",
      start: "top 10%",
      end: "top top",
      toggleActions: "play none none reverse"
    },
    background: "#FFFFFF",
    color: "#4a5568",
    boxShadow: "0px 0.5px 4px 1px rgba(138,138,138,0.2)",
  }
)

let overlayElement = document.querySelector('#overlay');
let navBurger = document.getElementById("navburger");
let navClose = document.getElementById("navclose");

navBurger.addEventListener("click", function(){
  overlayElement.classList.add("visible");
  document.getElementById("navmenu").style.width = "60%";
});

navClose.addEventListener("click", function(){
  overlayElement.classList.remove("visible");
  document.getElementById("navmenu").style.width = "0";
});
