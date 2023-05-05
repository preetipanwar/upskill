// array methods

const beautyProducts = ["eyeliner", "eyeshadow", "lipstick", "mascara"];
const fruits = ["banana", "apple", "orange"];

// 1. merge both the arrays into a third array fruitProd                  (Hint: concat)
const fruitprod = beautyProducts.concat(fruits);
console.log(fruitprod);

// 2. convert array to string using toString()                            (Hint: toString)
console.log(fruitprod.toString());

// 3. convert array to string using join(), but use * not , as separator  (Hint: join)
console.log(fruitprod.join(" * "));

// 4. delete element - use splice to delete "eyeshadow"                   (Hint: splice)
console.log("4. before: ", beautyProducts);
beautyProducts.splice(1, 1);
console.log("4. output: ", beautyProducts);

// 5. add element - use splice to add an element "kajal"                  (Hint: splice)
console.log("5. before: ", fruitprod);
fruitprod.splice(0, 0, "kajal");
console.log("5. output", fruitprod);

// 6. create new array using slice                                          (Hint: slice)
console.log("before: ", fruitprod);
const tasty = fruitprod.slice(3);
console.log("6: ", tasty);
