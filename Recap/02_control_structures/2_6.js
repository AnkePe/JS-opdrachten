
// Make a program that ask the user to enter a number between 1 and 7.
// Depending on the number, display the day of the week that correspond. (1 => Monday, 2 => Tuesday, etc...)

const readlineSync = require("readline-sync")

const num = readlineSync.questionInt(`Geef een nummer van 1 tot 7: `)

if (num === 1) {console.log(`Het is maandag`)}
else if (num === 2) {console.log(`Het is dinsdag`)}
else if (num === 3) {console.log(`Het is woensdag`)}
else if (num === 4) {console.log(`Het is donderdag`)}
else if (num === 5) {console.log(`Het is vrijdag`)}
else if (num === 6) {console.log(`Het is zaterdag`)}
else if (num === 7) {console.log(`Het is zondag`)}