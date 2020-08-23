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


var projectCards = new Vue({
  el: '#project-cards',
  data: {
    products : [
      {
        id : 1,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "60 mL",
        price : "70,000",
        discountPrice : "40,000",
        link : "https://www.tokopedia.com/"
      },
      {
        id : 2,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "60 mL",
        price : "70,000",
        discountPrice : "50,000",
        link : "https://www.tokopedia.com/",
      },
      { 
        id : 3, 
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "70,000",
        discountPrice : "",
        link : "https://www.tokopedia.com/",
      },
      { 
        id : 4,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "70,000",
        discountPrice : "",
        link : "https://www.tokopedia.com/",
      },
      { 
        id : 5,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "70,000",
        discountPrice : "",
        link : "https://www.tokopedia.com/",
      }
    ]    
  }
})
