
// Write a program that will add all the elements of an array.

// Test it with the following arrays:

// [1, 2, 3, 4, 5] => 15
// [100, 101, 102] => 303

const readlineSync = require("readline-sync")

const arrey_1 = [1, 2, 3, 4, 5]
const arrey_2 = [100, 101, 102]

const addElArray = arrey => {   //eerst voor 1 array geschreven en dan in een functie gestoken
let total = 0
for(let elem of arrey) {
    total += elem
}
console.log(total)
}
addElArray(arrey_1)
addElArray(arrey_2)