// iteration related

const beautyProducts = ["eyeliner", "eyeshadow", "lipstick", "nail paint"];

console.log("\nfor-of output:\n");

// for-of
for (let element of beautyProducts) {
  console.log(element);
}

console.log("\nfor-in output:\n");

// for-in
for (let index in beautyProducts) {
  console.log(index, beautyProducts[index]);
}

console.log("\nforEach output:\n");

// forEach
beautyProducts.forEach(function f(value, index, arr) {
  console.log(index, value);
});

console.log("\nmap output:\n");

// map
beautyProducts.map(function f(value, index, arr) {
  console.log(index, value);
});

// traditional for loop --- boring
