let htmlElement = document.querySelector('html');
let bodyElement = document.querySelector('body');
let overlayElement = document.querySelector('.overlay-black');

document.getElementById("navburger").addEventListener("click", function(){
  htmlElement.style.overflow = 'hidden';
  bodyElement.style.overflow = 'hidden';
  overlayElement.style.display = 'block';
  overlayElement.style.opacity = 0.5;

  document.getElementById("navmenu").style.width = "75%";
});

document.getElementById("navclose").addEventListener("click", function(){
  document.getElementById("navmenu").style.width = "0";
  htmlElement.style.overflow = '';
  bodyElement.style.overflow = '';
  overlayElement.style.opacity = 0;
  overlayElement.style.display = 'hidden';
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
      { id : 3, 
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "70,000",
        discountPrice : "",
        link : "https://www.tokopedia.com/",
      },
      { id : 4,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "70,000",
        discountPrice : "",
        link : "https://www.tokopedia.com/",
      },
      { id : 5,
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
