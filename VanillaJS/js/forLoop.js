// 4 types of for loop
// 1. for-in
// 2. for-of
// 3. forEach
// 4. regular old for loop

const fruits = ["apple", "mango", "banana"];

// for-in works both on arrays and objects
for (let a in fruits) {
  console.log(a, fruits[a]);
}

console.log("\n"); // extra line on console

const movie = {
  name: "pathaan",
  actor: "srk",
  released: "2023",
};

for (let key in movie) {
  console.log(key, ":", movie[key]);
}

console.log("\n"); // extra line on console

// works on iterables like array
for (let value of fruits) {
  console.log(value);
}

console.log("\n"); // extra line on console

// forEach
fruits.forEach(function f(value, index) {
  console.log(index, value);
});

// conclusion
// for-of is best to be used on array
// for-in is best for objects
// forEach is best for array
