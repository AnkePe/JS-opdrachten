// Display all even numbers between 1 and 100.

// Bonus: do two different versions. The first one should use while and make a loop that will execute 100 times. 
// The second one should use for and make a loop that will execute 50 times.

const readlineSync = require("readline-sync")

let num = 1     //start
while (num <= 100) {      //hoe lang
    if (num % 2 === 0) {console.log(num)};
    num++       //wat moet er veranderen elke keer
}      

for (let num = 2; num <= 100; num +=2) {    //opgepast geen spatie bij +=2 anders werkt het niet!
    if (num % 2 === 0) {console.log(num)}
}
