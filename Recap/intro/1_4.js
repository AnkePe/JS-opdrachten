// Make this same thing as Exercise 2 but this 
// time ask the user for the name, the first name and the city.

const readlineSync = require("readline-sync")

const name = readlineSync.question(`Wat is uw achternaam?`)
const firstName = readlineSync.question(`Wat is uw voornaam?`)
const city = readlineSync.question(`Waar woont u?`)

console.log (`Uw naam is ${firstName} ${name} en u woont in ${city}.`)