
// In het meegeleverde HTML-bestand, 
// wanneer u over de afbeelding hovert, 
// voegt u een rode 3px rand toe en verwijdert u deze 
// wanneer de muis er niet meer overheen zweeft.

const $img = document.querySelector('img')
console.log($img)

const handleMouseoverImg = () => $img.style.border = "3px solid red"
const handleMouseoutImg = () => $img.style.border = ""

$img.addEventListener("mouseover", handleMouseoverImg)
$img.addEventListener("mouseout", handleMouseoutImg)

