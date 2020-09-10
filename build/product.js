var projectCards = new Vue({
  el: '#project-cards',
  data: {
    products : [
      { 
        id : 1,
        image : "./resources/product-pic/hs-60-nu-low-pix.png",
        imageAlt : "Hand Sanitizer 60 mL",
        name : "Hand Sanitizer",
        spec : "60 mL",
        price : "15000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid",
      },
      { 
        id : 2,
        image : "./resources/product-pic/hs-100-nu-low-pix.png",
        imageAlt : "Hand Sanitizer 100 mL",
        name : "Hand Sanitizer",
        spec : "100 mL",
        price : "20000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid",
      },
      { 
        id : 3,
        image : "./resources/product-pic/hs-250-nu-low-pix.png",
        imageAlt : "Hand Sanitizer 250 mL",
        name : "Hand Sanitizer Spray",
        spec : "250 mL",
        price : "35000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid",
      },
      { 
        id : 5,
        image : "./resources/product-pic/hs-500-pump-transparan-nu-low-pix.png",
        imageAlt : "Hand Sanitizer 500 mL",
        name : "Hand Sanitizer",
        spec : "500 mL",
        price : "50000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid",
      },
      {
        id : 6,
        image : "./resources/product-pic/hs-1L-nu-lox-pix.png",
        imageAlt : "Hand Sanitizer 1 L",
        name : "Hand Sanitizer",
        spec : "1 L",
        price : "80000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid",
      },
      { 
        id : 7,
        image : "./resources/product-pic/hs-5L-low-pix.png",
        imageAlt : "Hand Sanitizer 5 L",
        name : "Hand Sanitizer",
        spec : "5 L",
        price : "350000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid",
      },
      { 
        id : 8,
        image : "./resources/product-pic/dis-250-aerosol-nu-low pix.png",
        imageAlt : "Disinfectant Aerosol 250 mL",
        name : "Disinfectant Aerosol",
        spec : "250 mL",
        price : "45000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid",
      },
      {
        id : 9,
        image : "./resources/product-pic/dis-250-nu-low-pix.png",
        imageAlt : "Disinfectant Spray 250 mL",
        name : "Disinfectant Spray",
        spec : "250 mL",
        price : "35000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid"
      },
     
      {
        id : 10,
        image : "./resources/product-pic/dis-1L-low-pix.png",
        imageAlt : "Disinfectant",
        name : "Disinfectant",
        spec : "1 L",
        price : "70000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid"
      },
      {
        id : 11,
        image : "./resources/product-pic/dis-5L-low-pix.png",
        imageAlt : "Disinfectant Aerosol",
        name : "Disinfectant",
        spec : "5 L",
        price : "320000",
        discount : "20%",
        link : "http://www.tokopedia.com/cleanprofid",
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

      // Safari doesn't support JS Lookbehind yet
      // return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
  }
})