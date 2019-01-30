
// Doe in het meegeleverde HTML-bestand hetzelfde als in oefening 1, 
// maar dan met 5 afbeeldingen.
// Bonus Maak slechts 1 functie voor deze oefening.

let imgs = document.querySelectorAll('img')
console.log(imgs)


imgs.forEach(img => {
    const $oorspr = img.src
    const $nieuw = $oorspr.replace(".jpg", "_2.jpg")    //replace() is js ftie
    img.addEventListener("mouseover", function(){
        img.src = $nieuw
    })         
})

// rest van oef 1
// const handleMouseoutImgs = () => img.setAttribute("src", "images/image1.jpg")   


// imgs.addEventListener("mouseover", handleMouseoverImgs)
// imgs.addEventListener("mouseout", handleMouseoutImgs)