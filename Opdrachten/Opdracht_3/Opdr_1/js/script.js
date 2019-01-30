// Zorg ervoor dat in de meegeleverde HTML-bestand, 
// de ene afbeelding wordt vervangen door de andere 
// afbeelding zodra je over de afbeelding hovert.

let img = document.querySelector(`#image1`)

const handleMouseoverImg = () => img.setAttribute("src", "images/image1_2.jpg")
const handleMouseoutImg = () => img.setAttribute("src", "images/image1.jpg")   

// 2 mogelijke schrijfwijzen:
document.querySelector(`#image1`).addEventListener("mouseover", handleMouseoverImg)
img.addEventListener("mouseout", handleMouseoutImg)

