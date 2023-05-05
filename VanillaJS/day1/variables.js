// variable is like a box, it stores something (data). Each box (variable) should have a name

// technical mumbo-jumbo: When a variable is declared, a memory location is reserved --->
// This simply means when a variable is named (declared) some space (memory location) is
// provided (reserved) to store data (our box)

// To declare a variable we use var, let and const

var var1;
let var2;
const var3 = "assign a value to const like this, else you will see an error";
// const var4;     // this will throw an error, uncomment to check

// A valid JavaScript variable name must follow the following rules (uncomment code statements below):

// A JavaScript variable name should not begin with a number.
let 3thisIsWrong;

// A JavaScript variable name does not allow special characters except dollar sign and underscore.
let @thisIsWrong;
let ^thisIsAlsoWrong;
let $thisIsOk;

// A JavaScript variable name follows a camelCase convention.
let camelCaseIsReadable;
let mostProgrammerWriteLikeThis;    // Note: javascript programmers
let thisisgiraffe;
let thisIsGiraffe;

// A JavaScript variable name should not have space between words.
let this is very wrong = "don't give space between the variables";

// following are the valid JavaScript variables
let firstName;
let lastName;
let country;
let city;
let capitalCity;
let age;
let isMarried;

let first_name;
let last_name;
let is_married;
let capital_city;

let num1;
let num_1;
let _num_1;
let $num1;
let year2020;
let year_2020;
