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
      // {
      //   id: 3,
      //   source: "./resources/slide-show-compress/on-orange-2.jpg",
      //   alt: "Orange"
      // },
      // {
      //   id: 4,
      //   source: "./resources/slide-show-compress/underwater.jpg",
      //   alt: "Underwater"
      // },
    ]
  }
})