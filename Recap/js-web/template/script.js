
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
//Ex 1
// Display three buttons named "Blue", "Red" and "Green" as well as 
// a <div> shaped like a square which should be black by default.

// When you click on any of these buttons it should 
// change the color of the <div> to the corresponding color.

const vierkant = document.querySelector('.vierkant')
const colorButtons = document.querySelectorAll('.color')
console.log(vierkant)
console.log(colorButtons)

const handleClickButton = (e) => vierkant.style.backgroundColor = e.target.innerText;

colorButtons.forEach(button => button.addEventListener('click', handleClickButton))


//Ex 2
// Display two text boxes and four buttons named "+", "-", "x" and "/". 
// Make the calculator work correctly by displaying 
// the result of the operation when the user clicks one of the buttons.


const calcButtons = document.querySelectorAll('.calc')
console.log(calcButtons)

let calcResult = ''

const handleClickCalcButton = (e) => {
  // binnen de functie pas kijken want dan zijn de nrs ingevuld!
  const num_1 = parseInt(document.querySelector('#num_1').value)
  const num_2 = parseInt(document.querySelector('#num_2').value)
  console.log(num_1, num_2)
  
  if (e.target.innerText === "+") {
    calcResult = num_1 + num_2
  }  else if (e.target.innerText === "-") {
    calcResult = num_1 - num_2
  }  else if (e.target.innerText === "*") {
    calcResult = num_1 * num_2
  }  else if (e.target.innerText === "/") {
    calcResult = num_1 / num_2}
  // resultaat in dat tekstveld krijgen
  console.log(calcResult)
  document.querySelector('#calcTotal').value = calcResult
}

calcButtons.forEach(button => button.addEventListener('click', handleClickCalcButton))

//Ex 3
// Display a form asking for the user's super vilain name, super power, 
// motivation and plan to conquer the world. 

// The form should have two buttons, "Reset" and "Display". 
// When clicking "Reset" it should erase the value of all the form elements to allow re-entering everything. 
// When clicking "Display" it should erase the whole form and the buttons 
// from the screen and display a text with headers showing the result collected in the previous form.

// When it's done, fill the form, display the result, print it and give it to your coach. 
// He received special instructions and knows what to do with it.

// ben begonnen met html form met 2x input text 2x textarea 2x button 
// !!!opgepast buttons 1 reset type en 1 button type
// event schrijven voor display


const $formVilain = document.getElementById("formVilain")

console.log($formVilain)

const handleClickButtonDisplayForm = () => {
  console.log("pfff")

  const $nickName = document.getElementById("nickName").value
  const $superPower = document.getElementById("superPower").value
  const $motivation = document.getElementById("motivation").value
  const $plan = document.getElementById("plan").value
  console.log($nickName, $superPower, $motivation)
  console.log($plan)

  $formVilain.remove()

  document.getElementById("who").innerText = $nickName
  document.getElementById("what").innerText = $superPower
  document.getElementById("how").innerText = $plan
  document.getElementById("why").innerText = $motivation

  document.getElementById("displayVilain").style.display = "block"
}

document.querySelector('.displayForm').addEventListener("click", handleClickButtonDisplayForm)


//Ex 4
// Display three select boxes allowing to enter a birthdate. 
// When the user selects a value for each of the select boxes, display its age.

// Bonus: Make your components smart by making it impossible 
// to enter a date that doesn't exist. (Like 1990-04-31 or 1991-02-29.)

const today = new Date()
const todayYear = today.getFullYear()
const todayMonth = today.getMonth()
const todayDay = today.getDate()
console.log(todayYear, todayMonth, todayDay)

// opties voor jaren invoeren
  const yearStart = 1920
  const yearEnd = today.getFullYear()
  console.log(yearEnd)
  let yearOptions = `<option value="">selecteer geboortejaar:</option>`
  for(let i = yearStart; i <= yearEnd; i++) {
    yearOptions += `<option value="${i}">${i}</option>`
  }
  console.log(yearOptions)
  document.getElementById("birthYear").innerHTML = yearOptions

// opties voor de maanden invoeren
  const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']  
  let monthOptions = `<option value="">selecteer geboortemaand:</option>`
  for(let i = 0; i < months.length; i++) {
    monthOptions += `<option value="${i}">${months[i]}</option>`
  }
  console.log(monthOptions)
  document.getElementById("birthMonth").innerHTML = monthOptions

// opties voor de dagen invoeren
  let dayOptions = `<option value="">selecteer geboortedag:</option>`
  for(let i = 1; i <= 31; i++) {
    dayOptions += `<option value="${i}">${i}</option>`
  }
  console.log(dayOptions)
  document.getElementById("birthDay").innerHTML = dayOptions

// waarde van de gekozen opties bewaren
// mag je niet binnen die handleFties doen, want dan herkent hij die waardes daarbuiten niet!
// const handleChangeSelectBirthYear = (e) => {
//   const $birthYear = parseInt(e.target.value)
//   console.log($birthYear)
// }
// document.getElementById("birthYear").addEventListener("change", handleChangeSelectBirthYear)

// const handleChangeSelectBirthMonth = (e) => {
//   const $birthMonth = parseInt(e.target.value)
//   console.log($birthMonth)
// }
// document.getElementById("birthMonth").addEventListener("change", handleChangeSelectBirthMonth)

// const handleChangeSelectBirthDay = (e) => {
  
//   console.log($birthDay, $birthMonth, $birthYear)
// }
// document.getElementById("birthDay").addEventListener("change", handleChangeSelectBirthDay)

// volgende werkt als je de leeftijdbutton aanklikt
const handleClickButtonLeeftijd = (e) => {
  const $birthYear = parseInt(document.getElementById("birthYear").value)
  const $birthMonth = parseInt(document.getElementById("birthMonth").value)
  const $birthDay = parseInt(document.getElementById("birthDay").value)
  console.log($birthDay,$birthMonth,$birthYear) 

  let age = todayYear - $birthYear
  if (todayMonth < $birthMonth) {age --}
  if (todayMonth === $birthMonth && todayDay < $birthDay) {age --}
  console.log(age)
  e.target.innerText = `U bent ${age} jaar jong`
}

document.querySelector('#leeftijd').addEventListener("click", handleClickButtonLeeftijd)


console.log("Hey look in your browser console. It works!")
