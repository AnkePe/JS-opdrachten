const up = document.getElementById(`up`);
console.log(up);
const down = document.getElementById(`down`);
const left = document.getElementById(`left`);
const right = document.getElementById(`right`);

const handleKeydownDiv = () => {
    let pressedKey = event.key;
    console.log (pressedKey);
    switch (pressedKey) {
        case "ArrowUp": up.className = "highlight";
        break;
        case "ArrowDown": down.className = "highlight";
        break;
        case "ArrowLeft": left.className = "highlight";
        break;
        case "ArrowRight": right.className = "highlight";
        break;

    }
}
const handleKeyupDiv = () => {
    let pressedKey = event.key;
    console.log (pressedKey);
    switch (pressedKey) {
        case "ArrowUp": up.classList.remove ("highlight");
        break;
        case "ArrowDown": down.classList.remove ("highlight");
        break;
        case "ArrowLeft": left.classList.remove ("highlight");
        break;
        case "ArrowRight": right.classList.remove ("highlight");
        break;

    }
}
document.addEventListener(`keydown`, handleKeydownDiv);
document.addEventListener(`keyup`, handleKeyupDiv)
