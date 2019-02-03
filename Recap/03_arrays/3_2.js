
// Write a program that will calculate the average value of a given array.

// Test it with the following arrays:

// [1, 2, 3, 4, 5] => 3
// [100, 101, 102] => 101

const arrey_1 = [1, 2, 3, 4, 5]
const arrey_2 = [100, 101, 102]

const averageElArray = arrey => {   //eerst voor 1 array geschreven en dan in een functie gestoken
let total = 0
for(let elem of arrey) {
    total += elem
}
let average = total / arrey.length
console.log(average)
}
averageElArray(arrey_1)
averageElArray(arrey_2)