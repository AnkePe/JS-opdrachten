// Vraag de gebruiker naar zijn/haar lengte en het geboortejaar. 
// Creëer een functie die de volgende berekeningen uitvoert:

//     Vermenigvuldig de lengte met 2
//     Voeg 5 toe aan het resultaat
//     Vermenigvuldigen met 50
//     Trek het geboortejaar af
//     Voeg aan het resultaat 1766 toe.

// De functie moet het resultaat teruggeven. Test met uw geboortedatum en lengte. 
// Waarschuwing: gebruik geen "result"-variabele.

const sendData = () => {
    let lengte = Number(document.getElementById("height").value);
    let geboortejaar = Number(document.getElementById("birthdate").value);
    let berekening = ((lengte *2) + 5) * 50 - geboortejaar + 1766;
    alert (berekening);
};