let numberOfButtons = document.querySelectorAll(".bt").length;

for (let i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".bt")[i].addEventListener("click", function() {

    let value = this.value;

    displayAndClear(value);

  });

}


  function displayAndClear(input){

  if (input == "clear") {
    // clear the screen 
    cal.screen.value = null;
  }
  else if (input == "="){
    // noting 
  }
  else {
  // conacatentation
  cal.screen.value = cal.screen.value + input ;
  }
  
  }