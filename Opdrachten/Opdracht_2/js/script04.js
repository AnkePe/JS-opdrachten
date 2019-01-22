//maak een array genaamd tab
const tab = [-2, 1, 3];

//creeer een ftie met argument x 
//geeft resultaat van de optelling van x en 2
const add = x => x + 2;

//creeer een display ftie die onclick aangeroepen wordt
//voor elk el van de array het resultaat weergeven in dialoogvensters
// const display = () => {
//     tab.forEach (el => alert (`De som van ${el} en 2 is ${add(el)}`));
// }

// je moet .length gebruiken!
const display = () => {
    for (let i=0; i<tab.length; i++) {
        alert (`De som van ${tab[i]} en 2 is ${add(tab[i])}`);
    }
    
}