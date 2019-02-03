
// Ask the user to enter three numbers: min, max and current. 
// Display if current is between min and max.

// Bonus: if min is greater than max, display an error message to explain 
// the user he's doesn't understand anything then exit the program. 
// (It must not ask any other question.)

// Bonus 2: be polite in the error messages. (facultative)

const readlineSync = require("readline-sync")

console.log(`Geef hieronder 3 getallen op: een minimum, een maximum en een getal ertussenin.`)
const min = readlineSync.questionInt(`Geef een getal als minimum:`) // Int toevoegen om number te krijgen!!!!
const max = readlineSync.questionInt(`Geef een gatal als maximum:`)

if (min > max) {
    console.log(`U hebt de opdracht niet begrepen!`)
} else {
const current = readlineSync.questionInt(`Geef een gatal ergens daartussen: `)
if (current > min && current < max) { console.log (`${current} ligt tussen ${min} en ${max}`)}
else { console.log(`Dit is geen getal tussen het minimum en het maximum.`)}
}
