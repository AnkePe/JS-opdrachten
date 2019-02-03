// Write a program that will display the minimum and maximum elements of a given array.

const arrey_1 = [1, 2, 3, 4, 5]
const arrey_2 = [100, 101, 102]

const minMaxArray = arrey => {
    console.log(Math.max.apply(null, arrey))    //dit toepassen voor arrey ipv gewoon math.max(.,.,.) omdat die losse getallen neemt
    console.log(Math.min(...arrey))             // andere manier, opgepast beiden werken enkel als je array niet te veel eln bevat
    }

minMaxArray(arrey_1)
minMaxArray(arrey_2)