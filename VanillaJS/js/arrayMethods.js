
let fruits = ['apple', 'mango', 'grapes']

fruits.forEach(function(fruit) {
     console.log(fruit)
})


// returns an array
// numbers.map()
// fruits.map(fruit => `<li>${fruit}</li>`)
result = fruits.map(function(fruit){
    return `<li>${fruit}</li>`
})


let numbers = [1, 2, 7, 4, 5, 6, 7]

result = numbers.reduce(function(sum, number){
    return sum + number;
})

console.log(result);

// returns an array
// number.filter()
// numbers.filter(number => number > 3)
result = numbers.filter(function(number){
    return number > 3;
})

// returns a number
// numbers.find(number => number > 2)
result =  numbers.find(function(number) {
    return number > 2;
})


// returns number
result = numbers.findIndex(function(number) {
    return number == 7; 
})

// returns number
result = numbers.indexOf(7)

// returns Boolean
result = numbers.includes(7)


console.log(result)
