const beautyProducts = [
  "eyeliner",
  "eyeshadow",
  "lipstick",
  "nail paint",
  "mascara",
];
// most used array methods
// 1. output the values of this beautyProducts array on console.
console.log(beautyProducts);

// 2. output the length of the array               (Hint: .length)
console.log(beautyProducts.length);

// 3. use array index to output lipstick           (Hint: .[])
console.log(beautyProducts[2]);

// 4. add an element "foundation" in the beginning of the array   (Hint: unshift)
beautyProducts.unshift("foundation");
console.log(beautyProducts);

// 5. add an element "lipliner" to the end of array               (Hint: push)
beautyProducts.push("lipliner");
console.log(beautyProducts);

// 6. delete an element from the start of array                   (Hint: shift)
beautyProducts.shift();
console.log(beautyProducts);

// 7. delete an element from the end of array                     (Hint: pop)
beautyProducts.pop();
console.log(beautyProducts);

// 8. Output the indexOf "nailpaint" from  array   (Hint: indexOf)
console.log(beautyProducts.indexOf("nail paint"));
