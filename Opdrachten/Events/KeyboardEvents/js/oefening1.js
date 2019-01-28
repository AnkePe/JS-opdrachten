
// naar het hele document kijken
// document.addEventListener('keydown', function(e){
//   switch(e.key){
//       case `0`: document.querySelector(`#character`).style.backgroundColor = "orange"; break;
//       case `1`: document.querySelector(`#character`).style.backgroundColor = "blue"; break;
//       default: text = "Probeer opnieuw";
//   }
// });

//lukt allemaal niet, dit van Sonia gekregen en werkt wel!
const division = document.querySelector(`#character`);

document.addEventListener(`keydown`, handleKeydownDiv);
function handleKeydownDiv() {
let pressedKey = event.key;
switch (pressedKey) {
case "0":
division.style.backgroundColor = "orange";
break;
case "1":
division.style.backgroundColor = "blue";
break;
case "2":
division.style.backgroundColor = "red";
break;
case "3":
division.style.backgroundColor = "silver";
break;
case "4":
division.style.backgroundColor = "gold";
break;
case "5":
division.style.backgroundColor = "yellow";
break;
case "6":
division.style.backgroundColor = "green";
break;
case "7":
division.style.backgroundColor = "salmon";
break;
case "8":
division.style.backgroundColor = "magenta";
break;
case "9":
division.style.backgroundColor = "purple";
}
console.log(pressedKey);
}