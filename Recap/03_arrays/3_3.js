// Write a program that will create a duplicate of a given array.

// Bonus: make a first version that will only do it using push(). 
// Make a second version that uses a single method call to perform the copy. 
// (You'll have to search on the MDN or Google for this one.)

const arrey_1 = [1, 2, 3, 4, 5]
const arrey_2 = [100, 101, 102]

const duplicateArray = arrey => {   //eerst voor 1 array geschreven en dan in een functie gestoken

let duplo = []  

for(let elem of arrey) {
duplo.push(elem)   
}
console.log(duplo)
}
duplicateArray(arrey_1)
duplicateArray(arrey_2)

const duplicateArray_2 = arrey => {
    duplo = arrey.map (x => x)
    console.log(duplo)
}
duplicateArray_2(arrey_1)
duplicateArray_2(arrey_2)