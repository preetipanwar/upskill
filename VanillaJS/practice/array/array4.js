const yourCodeGoesHere = "replace 'yourCodeGoesHere'";

// most used array methods

const cars = ["hyundai", "toyota", "suzuki", "mahindra", "tata"];

// 1. output the values of cars array on console.
console.log("\n1. output: ", cars); // replace yourCodeGoesHere with your code

// 2. output the length of cars array                               (Hint: .length)
console.log("\n2. length of cars: ", cars.length); // replace yourCodeGoesHere

// 3. use array index to output following car brands                (Hint: .[])
console.log("\n3.a. suzuki: ", cars.indexOf("suzuki")); // replace yourCodeGoesHere
console.log("3.b. mahindra: ", cars.indexOf("mahindra")); // replace yourCodeGoesHere
console.log("3.c. toyota: ", cars.indexOf("toyota")); // replace yourCodeGoesHere

// 4. add an element "kia" in the beginning of the array            (Hint: unshift)
// write code here
cars.unshift("kia");
console.log("\n4. output: ", cars); // to check the output

// 5. add an element "ford" to the end of array                     (Hint: push)
// write code here
cars.push("ford");
console.log("\n5. output: ", cars); // to check the output

// 6. delete an element from the start of array                     (Hint: shift)
// write code here
cars.shift();
console.log("\n6. output: ", cars); // to check the output

// 7. delete an element from the end of array                       (Hint: pop)
// write code here
cars.pop();
console.log("\n7. output: ", cars);

// 8. Output the indexOf "ford" from  array                         (Hint: indexOf)
console.log("\n8. index of ford", cars.indexOf("ford")); // replace ""
