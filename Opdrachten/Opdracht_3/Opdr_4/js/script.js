// Zorg ervoor dat in het meegeleverde HTML-bestand met de reset-knop 
// de gegevens uit de formuliervelden worden gewist.

const reset = document.querySelector("#reset")
console.log(reset)

// volgende werkte niet en reden zie lijn 11
// const handleClickReset = () => {
//     const labels = document.querySelectorAll('label')
//     console.log(labels)
//     labels.forEach (label => label.nextElementSibling.input.value =``) // input staat er teveel
// }
const handleClickReset = () => {
    const inputs = document.querySelectorAll('input')
    console.log(inputs)
    inputs.forEach (el => el.value =``)
}
reset.addEventListener ("click", handleClickReset)