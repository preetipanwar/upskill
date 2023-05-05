// Data types in Js
// 1. Numbers
// 2. String
// 3. Booleans
// 4. Undefined
// 5. Null

// 1. Numbers can be integers or Float (Decimal numbers)
console.log(typeof 7); // number

// 2. String is also quite easy, its anything in "between a pair of quotes"
console.log(typeof "this text"); // string

// 3. Booleans - when we need something to be either true or false, booleans are there for us
console.log("3 = 3", 3 === 3);
console.log("3 = 4", 3 === 4);

// 4. Undefined In JavaScript, if we
// 1. don't assign a value to a variable, the value is undefined.
// 2. if a function is not returning anything, it returns undefined.

let firstName;
console.log(firstName); // undefined, because it is not assigned to a value yet

// 5. null - is an empty value
let emptyValue = null;
// I know it feels weired but sometimes we do put null as a value to our variable,
// we will have a look at it later when we do some hands on practice

// checking data types
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined
