
// Make a program that asks the favorite number of the user. If that number is anything other than 42 display 
// "Are you sure?" and ask again. 
// (This program should never end as long as the user didn't chose 42).

        // kan enkel met een while loop omdat je niet weet hoeveel keer het moet lopen!

const readlineSync = require("readline-sync")

let favNum = readlineSync.questionInt(`Wat is uw lievelingsgetal?`)
if (favNum === 42) {console.log (`Ha ik wist het... 42!`)}
else {
while (favNum !== 42) {
    console.log(`Are you sure?`)
    favNum = readlineSync.questionInt(`Wat is uw lievelingsgetal?`) // niet opnieuw let gebruiken want dan is het een nieuwe
    if (favNum === 42) {console.log (`Ha ik wist het... 42!`)}
}
}