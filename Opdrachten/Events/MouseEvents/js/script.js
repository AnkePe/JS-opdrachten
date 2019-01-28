

const test = Array.from(document.querySelectorAll(`.hoverMe`));
console.log (test)

// this handler will be executed every time the cursor is moved over a div
const handleMouseoverDiv = event => event.target.innerText = ``;

test.forEach(test => test.addEventListener("mouseover", handleMouseoverDiv));

const myFunction = () => 
document.getElementById(`reset`).innerText = `het werkt niet`;
test.forEach(test => test.removeEventListener("mouseover", handleMouseoverDiv));

// const myFunction = () => document.getElementById(`reset`).innerText = `het werkt niet`;

document.getElementById(`reset`).addEventListener("click", myFunction)



