
# Cleanprof Website

This is the documentation for customizing
For the main builder files head over to the master branch

### How to update product(s) (set prices/discounts)
Products' properties can be updated by modifying the js -> product.js file

1. Head to *product.js* in the **/js/** folder and edit.

<img align="left" width="1000" height="140" src="https://github.com/cleanprof/cleanprof/blob/gh-pages/github/edit-product-1.png">
<img align="left" width="1000" height="140" src="https://github.com/cleanprof/cleanprof/blob/gh-pages/github/edit-product-2.png">
<img align="left" width="1000" height="140" src="https://github.com/cleanprof/cleanprof/blob/gh-pages/github/edit-product-3.png">


2. Change properties on the file to be updated
```javascript
// Ex: Changing Discount (or any other property)
{
    id : 1,
    image : "./resources/product-pic/hs-60-nu-low-pix.png",
    name : "Hand Sanitizer",
    spec : "60 mL",
    price : "17000",
    discount : "20%", // previous discount
    link : "https://www.tokopedia.com/cleanprofid/handsanitizer-cleanprof-60ml",
},
```
```javascript
// Discount prices are automatically calculated
{
    id : 1,
    image : "./resources/product-pic/hs-60-nu-low-pix.png",
    name : "Hand Sanitizer",
    spec : "60 mL",
    price : "17000", 
    discount : "50%", // new discount
    link : "https://www.tokopedia.com/cleanprofid/handsanitizer-cleanprof-60ml",
},
```
**IMPORTANT: Keep the comma (,) at the end of each line and curly braces (},)**
  
### How to add new products
To add new products you first need the **image (.png)** and the **product link** 

1. Head to **/resources/product-pic** folder, paste the image (.png)
2. Head to *product.js* in the **/js/** folder.
3. Add new product with these data structure at the bottom (or in the middle)
```javascript
{
    id : // unique id (add +1 after the last),
    image : // product image -> ./resources/product-pic/"filename".png
    name : // product name (Disinfectant, Sanitizer),
    spec : // size of product ("250 mL", "1L", "5L"),
    price : // original price,
    discount : // discount, calculated automatically in the page ("20%", "50%")
    link : // product link,
},
```

```javascript
// Adding new product below Disinfectant 5L
{
    id : 10,
    name : "Disinfectant",
    spec : "5 L",
    //...
    link : "https://www.tokopedia.com/cleanprofid/disinfectant-cleanprof-5l",
}, // IMPORTANT: KEEP THE COMMA (,) after each product

// New product
{
    id : 11,
    image : "./resources/product-pic/dis-5L-low-pix.png",
    name : "Disinfectant",
    spec : "100 L",
    price : "1200000",
    discount : "30%",
    link : "https://www.tokopedia.com/cleanprofid/disinfectant-100L",
},


```
  

### How to update Headline Home (change discount/sentence)
1. Head to *headline.js* in the **/js/** folder and edit.

2. Edit data section
```javascript
var headline = new Vue({
  el: '#headline-home',

  data: {
    firstLine: "Special Offers", 
    secondLine: "Up To 20%", // update to 10% change to -> "Up To 30%"
    detail: [ 
      "Promo until",
      "30 September 2020" // change date
    ]
  },
})
```