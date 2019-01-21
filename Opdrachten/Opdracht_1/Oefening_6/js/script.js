// Maak in een apart bestand een functie aan om de restdeling van 2 getalen weer te geven.
// Noem het programma aan vanuit het html-bestand.

const restdeling = (a,b) => a % b;

// onclick functie schrijven
const sendData = () => {
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);
    let resultaat = restdeling (a,b);
    alert (resultaat);
};