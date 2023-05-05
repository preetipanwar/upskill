// An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];

// storing the cars in single variables could look like this:
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

// what if you had not 3 cars, but 300?
// The solution is an array!
// An array can hold many values under a single name,
// and you can access the values by referring to an index number.

// Arrays are special kinds of objects,
// You can have variables of different types in the same Array.
// You can have objects in an Array.
// You can have functions in an Array.
// You can have arrays in an Array:

myArray[0] = {};
myArray[1] = myFunction;
myArray[2] = car3;
myArray[3] = 4;

// Real strength of JavaScript arrays are the built-in array methods & properties:
cars.length; // Returns the number of elements
cars.sort(); // Sorts the array
