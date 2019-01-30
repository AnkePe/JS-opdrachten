// In het meegeleverde HTML-bestand, 
// toon of verberg de tekst volgens de aangegeven linken.

const refs = document.querySelectorAll('a')
console.log(refs)
const $tekst = document.querySelector(`#text`)
console.log ($tekst)
// $tekst.style.display = "none";

// volgende oplossing werkt niet
// const handleClickRefs = () => {
//     refs.forEach (ref => {
        
//     if (ref.innerText === "Hide") {
//         $tekst.style.display = "none"
//     } else {
//         $tekst.style.display = "block"
//     }
// })
// }
// refs.forEach (ref => ref.addEventListener("click", handleClickRefs))


const handleClickRefShow = () => $tekst.style.display = "block"
const handleClickRefHide = () => $tekst.style.display = "none"

refs[0].addEventListener("click", handleClickRefShow)
refs[1].addEventListener("click", handleClickRefHide)

// ref.addEventListener("click", handleClickRefs)
