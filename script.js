const name_button = document.getElementById("name_button")
const name_input = document.getElementById("name_input")
const name_result = document.getElementById("name_result") //some bullshit mistake about capitalization


name_button.addEventListener("click", () => { // detecting for click on button
  let userName = name_input.value;            
  
  name_result.textContent = "hello " + userName;  //output 
  
  setTimeout(() => {
    console.log("waiting 3 seconds")
     document.getElementById("name").style.display = "none" //hiding first name page
     document.getElementById("tasks").style.display = "block" //showing second page with tasks
     document.getElementById("greeting_header").textContent = userName; //pushing to html (another case of capitalization)
     // make sure to capitalize the I in userInput...
  }, 3000);
  
  setTimeout(() => {
    console.log("waiting two seconds, showing header/name")
  }, 2000);
})


//test
//
