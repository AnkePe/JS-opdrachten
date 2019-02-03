// Ask the user to enter its first name and display a message saying "Hello first name".

const readlineSync = require("readline-sync")

let name = readlineSync.question(`Wat is uw voornaam?`) //hiermee vraag je iets in de terminal ipv met prompt
                                                        //want dat werkt niet in de terminal
console.log(`Hallo ${name}`)
