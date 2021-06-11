// Creating variables
let num1 = 0
let num2 = 0
let counter = 0
let answer = 0
let negative = false
// Adding a function to the button
document.getElementById('mybutton').addEventListener('click', calculate)
// Calculate
function calculate () {
  num1 = document.getElementById('myinput').value
  num2 = document.getElementById('myinput2').value
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  answer = 0
  negative = false
  // Allow negative numbers
  if (num1 < 0) {
    negative = !negative
    num1 = Math.abs(num1)
  }
  if (num2 < 0) {
    negative = !negative
    num2 = Math.abs(num2)
  }
  // Adding a loop
  for (counter = 0; counter < num1; counter++) {
    answer = answer + num2
  }
  if (negative) {
    answer = 0 - answer
  }
  // Display answer
  document.getElementById('myanswer').innerHTML = answer
}
