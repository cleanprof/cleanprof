var imageSlides = new Vue({
  el: '#slides',
  data: {
    images: [
      "./resources/slide-show-compress/aqua-1.jpg",
      "./resources/slide-show-compress/family-2.jpg",
      "./resources/slide-show-compress/on-orange-2.jpg",
      "./resources/slide-show-compress/underwater.jpg",
    ],
    timer: null,
    currentIndex: 0
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },

    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
})

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var slides = document.getElementsByClassName("slide");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;  
//   }
  
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
  
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" bg-orange-bright", "bg-white");
//   }

//   slides[slideIndex-1].style.opacity = 1;  
//   dots[slideIndex-1].className += " bg-orange-bright";
//   setTimeout(showSlides, 6000); // Change image every 6 seconds
// }