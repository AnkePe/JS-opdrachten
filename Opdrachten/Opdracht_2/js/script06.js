// maak een array genaamd tab
const tab = [-2, 1, 4]

// maak een substract functie met argument x
const substract = (x, i) => {
    if (x - tab[i] >= 0) {
       
        document.write (`   Getal positief`)
    } else {
        document.write (`   Negatief getal!`)
    }
}
substract(5, 0)
substract(-8, 0)
substract(-2, 0)

// maak een display functie onclick
// geef het resultaat van de substract ftie voor eerste el en laatste el van de array

const display = () => {
    substract(-2, 0)
    substract(-2, tab.length - 1)
};