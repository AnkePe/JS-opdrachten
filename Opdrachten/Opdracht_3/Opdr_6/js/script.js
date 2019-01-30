// Doe in het meegeleverde HTML-bestand hetzelfde als in oefening 5, 
// maar keer terug naar de originele afbeelding zodra de muis niet langer 
// over de afbeelding zweeft.
// Bonus Maak slechts 2 functies voor deze oefening.

let imgs = document.querySelectorAll('img')
console.log(imgs)


imgs.forEach(img => {
    const $oorspr = img.src
    const $nieuw = $oorspr.replace(".jpg", "_2.jpg")    //replace() is js ftie
    img.addEventListener("mouseover", function(){
        img.src = $nieuw
    })  
    img.addEventListener("mouseout", function() {
        img.src = $oorspr
    })       
})

// rest van oef 1
// const handleMouseoutImgs = () => img.setAttribute("src", "images/image1.jpg")   


// imgs.addEventListener("mouseover", handleMouseoverImgs)
// imgs.addEventListener("mouseout", handleMouseoutImgs)