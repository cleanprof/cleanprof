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

document.getElementById("navburger").addEventListener("click", function(){
  disableScroll();
  overlayElement.classList.add("visible");

  document.getElementById("navmenu").style.width = "60%";
});

document.getElementById("navclose").addEventListener("click", function(){
  enableScroll();
  overlayElement.classList.remove("visible");

  document.getElementById("navmenu").style.width = "0";
});

