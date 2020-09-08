var imageSlides = new Vue({
  el: '#slides',
  data: {
    images: [
      {
        id: 1,
        source: "./resources/slide-show-compress/aqua-1.jpg",
        alt: "Aqua"
      },
      {
        id: 2,
        source: "./resources/slide-show-compress/family-2.jpg",
        alt: "Family"
      },
      {
        id: 3,
        source: "./resources/slide-show-compress/on-orange-2.jpg",
        alt: "Orange"
      },
      {
        id: 4,
        source: "./resources/slide-show-compress/underwater.jpg",
        alt: "Underwater"
      },
    ]
  }
})

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-orange-bright", "bg-white");
  }

  slides[slideIndex-1].style.opacity = 1;  
  dots[slideIndex-1].className += " bg-orange-bright";
  setTimeout(showSlides, 6000); // Change image every 5 seconds
}