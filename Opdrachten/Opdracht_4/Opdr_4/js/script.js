// Zet in het meegeleverde HTML-bestand de invoergrenzen 
// in het rood als de wachtwoorden verschillend zijn. 
// Zet ze anders in het groen.

// als je op submit button klikt, moet je de 2 inputs
// vergelijken
const $password = document.querySelector("#password")
const $confirmation = document.querySelector("#confirmation")
console.log ($password)
console.log ($confirmation)

const handleClickSubmit = () => {
    if ($password.value === $confirmation.value) {
        $password.style.border = "1px solid green"
        $confirmation.style.border = "1px solid green"
    } else {
        $password.style.border = "1px solid red"
        $confirmation.style.border = "1px solid red"
    }
}

document.querySelector("button").addEventListener("click", handleClickSubmit)