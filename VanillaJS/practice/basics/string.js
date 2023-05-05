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
let alpha = "ALPHabet"; // a. find the length of alpha
let country = "aZerBIJan"; // b. find the length of country

console.log("\n1.a. output: ", alpha.length);
console.log("1.b. output: ", country.length);
console.log("1.c.: ", "find the length of this string".length);

// 2. uppercase alpha and country variable
let xyz = alpha.toUpperCase();
let pqr = country.toUpperCase();
console.log("\n2.a. alpha: ", xyz);
console.log("2.b. country: ", pqr);

// 3. lowercase country variable
let abc = alpha.toLowerCase();
let mnp = country.toLowerCase();
console.log("\n3.a. alpha: ", abc);
console.log("3.b. country: ", mnp);

let veggie = "tomatopotato";
let fruit = "kiwiBananaAppleDragon"; // Hint: slice)
// 4.a. Slice Banana using slice()
let tasty = fruit.slice(4, 10);
console.log("4.a.", tasty);

// 4.b. Slice everything after Banana
let bna = fruit.slice(0, 10);
console.log("4.b.", bna);

// 4.c. Slice everything before Dragon using        // Hint: use - negative
let dra = fruit.slice(-6);
console.log("4.c.", dra);

// 5.a. Slice banana from fruit using substr
let ban = fruit.substr(4, 6);
console.log("5.a.", ban);

// 5.b. Slice everything after Banana using substr
let mgy = fruit.substr(4);
console.log("5.b.", mgy);

// 5.c. Slice everything before Dragon using substr
let dgo = fruit.substr(-6);
console.log("5.c.", dgo);

// 6. Replace Apple with Grapes                     // Hint: .replace
let rpl = fruit.replace("Apple", "Grapes");
console.log("6.", rpl);

// 7. Add two strings using .concat
let whiteSpaceInString = veggie.concat(fruit);
console.log("7.", whiteSpaceInString);

let trimspace = "  kajal lipstick  ";
// 8.a. Remove white spaces in the following string     // Hint: trim
let trm = trimspace.trim();
console.log("8.a", trm);

// 8.b. Remove white spaces from the Start     // Hint: trimStart
let trmstart = trimspace.trimStart();
console.log("8.b", trmstart);

// 8.c. Remove white spaces from the End                // Hint: trimEnd
let trmend = trimspace.trimEnd();
console.log("8.c", trmend);

let city = "Al Ain";

// 9.a. Extract a character "i" from city               // Hint: charAt()
let text1 = city.charAt(4);
console.log("9.a.", text1);

// 9.b. Extract a character "i", use brackets []        // Hint: []
let text2 = city[4];
console.log("9.b.", text2);

// 10.a. convert string cities to an array, split using " "   // split(" ")
let cities = "delhi melbourne paris bangkok tokyo";
let ghj = cities.toString("");
console.log("10.a", ghj);

// 10.b. convert string cities to an array, split using *     // split
cities = "delhi*melbourne*paris*bangkok*tokyo";
let dhl = cities.split("*");
console.log("10.b", dhl);

// 10.c. convert string cities to an array, split using Z     // split
cities = "delhiZmelbourneZparisZbangkokZtokyo";
let z = cities.split("Z");
console.log("10.c", z);
