
// Create a "Story Teller".

// Ask questions to the user about different things. 
// Store the results he gives to you. Display them in a way that it creates a fun story!

// Bonus: when you ask questions to the user he should be 
// able to see how many questions remain to be asked.

const readlineSync = require("readline-sync")

const geg_1 = readlineSync.question("Wat is uw lievelingsdier?")
console.log (`Nog 2 vragen te gaan...`)
const geg_2 = readlineSync.question(`Wat is uw lievelingskleur?`)
console.log (`Nog 1 vraag te gaan...`)
const geg_3 = readlineSync.question(`Wat is uw lievelingsgetal?`)

console.log (`De lucht is ${geg_2} en ik zie een ${geg_1} van ${geg_3} jaar oud!`)
