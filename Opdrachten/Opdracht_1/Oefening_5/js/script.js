// Vraag de gebruiker om twee cijfers. Vermenigvuldig ze en geef het resultaat weer in een dialoogvenster.
const multiply = (a,b) => a * b;
const sendData = () => {
    let a = Number(document.getElementById("firstNumber").value);
    let b = Number(document.getElementById("secondNumber").value);
    let resultaat = multiply (a,b);
    alert (resultaat);
}