var products = new Vue({
  el: '#products',
  data: {
    products : productList  
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