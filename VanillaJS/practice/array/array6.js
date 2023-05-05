// iteration related

const colors = ["yellow", "green", "orange", "purple"];

// 1. print all the elements using for-of loop
for (let element of colors) {
  console.log("\nfor-of output:\n", element);
}

// 2. print all the elements using for-in loop
for (let element in colors) {
  console.log("\nfor-in output:\n", element);
}

// 3. print all the elements using forEach loop
colors.forEach(function (value) {
  console.log("\nforEach output:\n", value);
});

// 4. print all the elements using map

colors.map(function (value, index) {
  console.log("\nmap output:\n", index, value);
});
// primitive/traditional for loop --- the boring one
