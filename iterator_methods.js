//Task 1
let favCities = ["new york", "los angeles", "chicago", "houston", "miami"];
favCities.forEach(city => console.log(city.toUpperCase()));
//Output should be
// NEW YORK
// LOS ANGELES
// CHICAGO
// HOUSTON
// MIAMI

//Task 2
let numbers = [1, 2, 3, 4, 5];
let sqaures = numbers.map(number => number * number);
console.log(sqaures);
//Output should be
// [ 1, 4, 9, 16, 25 ]

//Task 3
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);
//Output should be
// [ 85, 90, 100 ]

//Task 4
let favoriteFood = ["ice", "hot dog", "tacos", "ice cream", "wings"];
console.log("First food with more than 4 letters: ", favoriteFood.find(food => food.length > 4));
console.log("Index of that food: ", favoriteFood.findIndex(food => food.length > 4));
//Output should be
// First food with more than 4 letters:  hot dog
// Index of that food:  1

//Task 5
let temperatures = [72, 65, 80, 90, 55];
console.log("temps above 90 degrees: ", temperatures.filter(temp => temp > 90));
console.log("Are all temps above 90 degrees? ", temperatures.every(temp => temp > 90));
//Output should be
// temps above 90 degrees:  []
// Are all temps above 90 degrees?  false

//Task 6
let budget = 100;
let prices = [15, 20, 25, 35];

console.log("Remaining budget: ", prices.reduce((total, price) => total - price, budget));
//Output should be
// Remaining budget:  5