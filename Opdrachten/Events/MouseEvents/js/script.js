// oefening 1: 3 verdwijnende divs als je erover komt met de muis
// gebruik Mouseover

const test = Array.from(document.querySelectorAll(`.hoverMe`));
console.log (test)

// this handler will be executed every time the cursor is moved over a div
const handleMouseoverDiv = event => event.target.style.visibility = `hidden`;

test.forEach(test => test.addEventListener("mouseover", handleMouseoverDiv));

// oefening 2: als je klikt op reset komen de onzichtbarte divs terug

// const myFunction = () => {
// document.getElementById(`reset`).innerText = `het werkt niet`;
// het werkt niet met removeEventListener, weet niet waarom???
// test.forEach(test => test.removeEventListener("mouseover", handleMouseoverDiv));
// }

// dan maar nieuwe gemaakt

const handleClickReset = () => {
    document.getElementById(`reset`).innerText = `het werkt!`;
    test.forEach(test => test.style.visibility = `visible`);
}

document.getElementById(`reset`).addEventListener("click", handleClickReset)

// oefening 3: 2 divs die de x en y coord. van de muis weergeven in het venster
//              verschil tussen clientX en clientY en screenX en screenY!!
// tip: gebruik de ontvangen event als parameter/argument
// tip: gebruik hierbij innerText of innerHTML om de divs inhoud te geven

let coordX = document.querySelector(`#x-axis`);
let coordY = document.querySelector(`#y-axis`);

const logKey = (e) => {
    coordX.innerText = `ClientX: ${e.clientX}`;     //geeft de x coord van de muis
    coordY.innerText = `ClientY: ${e.clientY}`;     //geeft de y coord van de muis
    }
document.addEventListener("mousemove", logKey);








