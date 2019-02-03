
// Ask two integers to the user. Display the rest of the integer division of the two numbers.

const readlineSync = require("readline-sync")

const num_1 = readlineSync.question(`Geef een geheel getal`)
const num_2 = readlineSync.question(`Geef nog een geheel getal`)

const result = num_1 % num_2

console.log(result)