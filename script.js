const name_button = document.getElementById("name_button")
const name_input = document.getElementById("name_input")
const name_result = document.getElementById("name_result") //some bullshit mistake about capitalization

name_button.addEventListener("click", () => { // detecting for click on button
  let userInput = name_input.value;            
  name_result.textContent = "hello " + userInput;  //output 
})
