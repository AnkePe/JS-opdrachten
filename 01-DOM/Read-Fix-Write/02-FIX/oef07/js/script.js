// * We willen het totaal aantal kijkers berekenen. (laatste deel van de meta informatie)
// * Check wat er mis loopt en probeer dit te fixen

const viewers = Array.from (document.querySelectorAll(`.episode-viewers`));
console.log(viewers);

const viewersAmount = viewers.map ($viewer => parseInt($viewer.innerText, 10));
console.log(viewersAmount);

const filterNan = amount => !isNaN(amount);  // checken dat onze waarde niet NaN is
const viewersAmountFiltered = viewersAmount.filter(filterNan);  // nieuwe gefilterde array
console.log(viewersAmountFiltered);

const reducer = (accumulator, currentValue) => accumulator + currentValue;  // alles optellen
let total = viewersAmountFiltered.reduce (reducer, 0);

// gegevens Thijs
// let total = 0;


// viewers.forEach($viewerAmount => {
//     const number = parseInt($viewerAmount.innerText, 10);
//     console.log (number);
//     // total += number;
// });

console.log(`Er keken in totaal ${total} miljoen personen`);

//Kan je het fixen zonder forEach te gebruiken? (met onder andere map() )
