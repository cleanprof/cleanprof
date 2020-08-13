$(".navburger").click(function() {
  $(".navmenu").toggleClass("relative");
  $(".navmenu").toggleClass("hidden");
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
        price : "IDR 70,000",
        link : "https://www.tokopedia.com/"
      },
      {
        id : 2,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "60 mL",
        price : "IDR 70,000",
        link : "https://www.tokopedia.com/",
      },
      { id : 3, 
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "IDR 70,000",
        link : "https://www.tokopedia.com/",
      },
      { id : 4,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "IDR 70,000",
        link : "https://www.tokopedia.com/",
      },
      { id : 5,
        image : "../resources/product-display.png",
        imageAlt : "Hand Sanitizer",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "IDR 70,000",
        link : "https://www.tokopedia.com/",
      }
    ]    
  }
})
