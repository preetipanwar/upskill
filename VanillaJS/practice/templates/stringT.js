// JavaScript strings are for storing and manipulating text.
// A JavaScript string is zero or more characters written inside quotes

"use backslash to \"escape\" the quotes";
console.log("or use different 'quotes' simply");
console.log('or use different "quotes" simply');
console.log("use two \\backslash for this type of output");
// use two \backslash for this type of output"

// 1. Template literals
// a. With template literals, you can use both single and double quotes inside a string:
let text = `He's often called "Johnny"`;

// b. Template literals allows multiline strings:
text = `The quick
brown fox
jumps over
the lazy dog`;

// c. Template literals allow variables in strings:
let firstName = "John";
let lastName = "Doe";
text = `Welcome ${firstName} ${lastName}!`;

// d. Template literals allow expressions in strings:
text = `Sum: ${3 + 5}`;

// string is primitive -> immutable, cannot be modified
let uae = "ankit";
let uaeUppercase = uae.toUpperCase();
console.log(uaeUppercase);

//challenges//////////////////////////////////////////////////////////////>

const yourCodeGoesHere = "replace 'yourCodeGoesHere' with your code";

// 1. Find the length of string
let alpha = "ALPHabet"; // a. find the length of alphabet
let country = "aZerBIJan"; // b. find the length of country

console.log("\n1.a. output: ", yourCodeGoesHere);
console.log("1.b. output: ", yourCodeGoesHere);
console.log("1.c. find the length of this string".yourCodeGoesHere);

// 2. uppercase alpha and country variable
console.log("\n2.a. alpha: ", yourCodeGoesHere);
console.log("2.b. country: ", yourCodeGoesHere);

// 3. lowercase country variable
console.log("\n3.a. alpha: ", yourCodeGoesHere);
console.log("3.b. country: ", yourCodeGoesHere);

let fruit = "kiwiBananaAppleDragon"; // Hint: slice)
// 4.a. Slice Banana using slice()
// 4.b. Slice everything after Banana
// 4.c. Slice everything before Dragon using        // Hint: use - negative

// 5.a. Slice banana from fruit using substr
// 5.b. Slice everything after Banana using substr
// 5.c. Slice everything before Dragon using substr

// 6. Replace Apple with Grapes                     // Hint: .replace

// 7. Add two strings using .concat

let whiteSpaceInString = "      remove   white   space  ";
// 8.a. Remove white spaces in the following string     // Hint: trim
// 8.b. Remove white spaces from the Start              // Hint: trimStart
// 8.c. Remove white spaces from the End                // Hint: trimEnd

let city = "Al Ain";
// 9.a. Extract a character "i" from city               // Hint: charAt()
// 9.b. Extract a character "i", use brackets []        // Hint: []

// 10.a. convert string cities to an array, split using " "   // split(" ")
let cities = "delhi melbourne paris bangkok tokyo";

// 10.b. convert string cities to an array, split using *     // split
cities = "delhi*melbourne*paris*bangkok*tokyo";

// 10.c. convert string cities to an array, split using Z     // split
cities = "delhiZmelbourneZparisZbangkokZtokyo";
