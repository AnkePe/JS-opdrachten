
// Ask to the user its shoe size and its birth year. Then make the following calculation:

// Multiply the shoe size by 2
// Add 5 to the result
// Multiply that by 50
// Subtract the birth year
// Add 1766
// Test with your own birth year and your shoe size.

const readlineSync = require("readline-sync")

const shoeSize = readlineSync.question(`Wat is uw schoenmaat?`
)
const birthYear = readlineSync.question(`Wat is uw geboortejaar?
`)
const result = (shoeSize * 2 + 5) * 50 - birthYear + 1769
console.log(result)