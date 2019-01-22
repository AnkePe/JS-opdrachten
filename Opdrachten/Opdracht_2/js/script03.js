//maak 2 globale variabelen
const a = 3
const b = 2

//creeer een triple functie die een argument x verwacht
//en het resultaat van x * 3 weergeeft
const triple = x => 3 * x;

//creeer een display functie die onclick aangeroepen wordt
//de ftie berekent eerst de formule met variabele a
//dan met variabele b
//geef het resultaat weer van beide formules in een alert()
const display = () => {
    alert (`Het driedubbele van ${a} is ${triple(a)}`);
    alert (`Het driedubbele van ${b} is ${triple(b)}`);
};