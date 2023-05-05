// Very often, in programming, you will need a data type that
// can only have one of two values, like

// YES / NO
// ON / OFF
// TRUE / FALSE

// For this, JavaScript has a Boolean data type.
// It can only take the values true or false.

// Boolean() function to find out if an expression (or a variable) is true:
Boolean(10 > 9);
// or simply use brackets
// (10 > 9); // true

// Everything With a "Value" is True
let x; // undefined
Boolean(x); // false

x = null; // null
Boolean(x); // false

x = 0; // zero value
Boolean(x); // false

x = -0; // minus zero
Boolean(x); // false

x = ""; // empty string
Boolean(x); // false

console.log(Boolean(3 + 4 - 1)); // true
console.log(Boolean("word")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false
