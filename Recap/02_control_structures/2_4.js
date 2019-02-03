// Count from 1 to 100. For every even number display the result of their division by 2. 
// For every odd number display the result of their multiplication by 3.

const readlineSync = require("readline-sync")

for(let num =1; num <= 100; num++){
    if (num%2 === 0) {console.log( num/2)}
    else {console.log(num*3)}
}