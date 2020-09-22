var products = new Vue({
  el: '#products',
  data: {
    products : [
      { 
        id : 1,
        image : "./resources/product-pic/hs-60-nu-low-pix.png",
        name : "Hand Sanitizer",
        spec : "60 mL",
        price : "17000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/handsanitizer-cleanprof-60ml",
      },
      { 
        id : 2,
        image : "./resources/product-pic/hs-100-nu-low-pix.png",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "22000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/handsanitizer-cleanprof-100ml",
      },
      { 
        id : 3,
        image : "./resources/product-pic/hs-250-nu-low-pix.png",
        name : "Hand Sanitizer Spray",
        spec : "250 mL",
        price : "38000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/handsanitizer-cleanprof-250ml",
      },
      { 
        id : 5,
        image : "./resources/product-pic/hs-500-pump-transparan-nu-low-pix.png",
        name : "Hand Sanitizer",
        spec : "500 mL",
        price : "55000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/handsanitizer-cleanprof-500ml",
      },
      {
        id : 6,
        image : "./resources/product-pic/hs-1L-nu-lox-pix.png",
        name : "Hand Sanitizer",
        spec : "1 L",
        price : "80000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/handsanitizer-cleanprof-1l",
      },
      { 
        id : 7,
        image : "./resources/product-pic/hs-5L-low-pix.png",
        name : "Hand Sanitizer",
        spec : "5 L",
        price : "400000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/handsanitizer-cleanprof-5l",
      },
      {
        id : 8,
        image : "./resources/product-pic/dis-250-nu-low-pix.png",
        name : "Disinfectant Spray",
        spec : "250 mL",
        price : "38000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/disinfectant-cleanprof-250ml"
      },
      { 
        id : 9,
        image : "./resources/product-pic/dis-250-aerosol-nu-low pix.png",
        name : "Disinfectant Aerosol",
        spec : "250 mL",
        price : "50000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/disinfectant-aerosol-cleanprof-250ml",
      },
      {
        id : 10,
        image : "./resources/product-pic/dis-1L-low-pix.png",
        name : "Disinfectant",
        spec : "1 L",
        price : "70000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/disinfectant-cleanprof-1l"
      },
      {
        id : 11,
        image : "./resources/product-pic/dis-5L-low-pix.png",
        name : "Disinfectant",
        spec : "5 L",
        price : "350000",
        discount : "30%",
        link : "https://www.tokopedia.com/cleanprofid/disinfectant-cleanprof-5l",
      },
    ]    
  },
  methods: {
    discountPrice: function (product) {
      discountPercent = +((product.discount).split('%')[0]);
      finalPrice = +(product.price) * (100-discountPercent)/100;
      return this.priceCommaString(finalPrice);
    },

    priceCommaString: function (price) {
      var parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
  }
})