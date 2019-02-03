// Ask two numbers with decimal part to the user. 
// For the first one only keep the integer part. Then multiply them and display the result.

// You will have to perform a search on Google to know how to only keep the integer part of a number.

const readlineSync = require("readline-sync")

const num_1 = readlineSync.question(`Geef een getal met 2 cijfers na de komma`)
const num_2 = readlineSync.question(`Geef nog een getal met 2 cijfers na de komma`)

const result = Math.floor(num_1) * num_2

console.log(result)

