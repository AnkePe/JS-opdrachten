// Define three variables: name, firstName and city. 
// Display them like this: "Your name is Gerard Lambert and you live in Paris.".

const readlineSync = require("readline-sync")   // nodig om vragen te stellen in terminal - aparte node module

const name = "Guetens"
const firstName = "Ward"
const city = "Antwerpen"

console.log (`Uw naam is ${firstName} ${name} en u woont in ${city}.`)