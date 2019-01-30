// Wijzig in het meegeleverde HTML-bestand 
// de kleur van de tekst volgens de geselecteerde knop.

const colors = document.querySelectorAll(".color")
console.log(colors)

const $text = document.getElementById("text")
console.log(text)

 colors.forEach(color => {
    const handleClickColors = () => {
        let kleur = color.className
        switch (kleur) {
            case "color green": $text.style.color = "green";
            break;
            case "color red": $text.style.color = "red";
            break;
            case "color blue": $text.style.color = "blue";
            break;
            default: console.log (`probleem!`)
            }
        }
    color.addEventListener("click", handleClickColors)   
 });
 
