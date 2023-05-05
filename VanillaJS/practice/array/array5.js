// array methods

const yourCodeGoesHere = "replace 'yourCodeGoesHere' with your code";

const animals = ["elephant", "camel", "owl", "tiger"];
const birds = ["peacock", "kookaburra", "dove"];

// 1. merge both the arrays into a third array                  (Hint: concat)
let livingBeings = animals.concat(birds);
console.log("\n1. output: ", livingBeings);

// 2. convert array to string using toString()                         (Hint: toString)
console.log("\n2. output: ", animals.toString());

// 3. convert array to string using join(), use * as separator         (Hint: join)
console.log("\n3. output: ", animals.join(" * "));

// 4. delete element - use splice to delete "camel"                   (Hint: splice)
console.log("\n4. before: ", animals);
// yourCodeGoesHere
animals.splice(1, 1);
console.log("4. after: ", animals);

// 5. add element - use splice to add an element "whale"                  (Hint: splice)
console.log("\n5. before: ", animals);
// yourCodeGoesHere
animals.splice(1, 0, "whale");
console.log("5. after", animals);

// 6. create new array using slice                                          (Hint: slice)
console.log("\n6 before: ", animals);
const abc = animals.slice(1);
// yourCodeGoesHere
console.log("6", abc);
console.log("6 after: ", animals);
