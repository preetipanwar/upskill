const foodItems = [
  { id: 1, name: 'bread' },
  { id: 2, name: 'milk' },
];

const numbers = [1, 2, 3, 4, 5];

numbers.find((n) => {
  return n === 3;
});

// lets say we want to find object containing milk in foodItems array
// const storeResult = foodItems.find(function(food){    // return the complete object or undefined
// 	return food.name === 'milk';                   // true - false
// });

const result = foodItems.find(function (food) {
  // return the complete object or undefined
  return food.name === 'milk'; // true - false
});

if (result) console.log(result);

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
];

const r = inventory.find(function (fruit) {
  return fruit.name === 'bananas';
});

console.log(r);
