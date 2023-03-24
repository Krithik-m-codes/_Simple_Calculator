// Get the calculator display element
var result = document.getElementById("result");

// Get all the calculator keys
var btn = document.querySelectorAll(".btn");

//var calc = document.getElementsByClassName(".calculator")

/*calc.addEventListener( "onhover",function(e){
    var text = 'Made By krithik'
    
})*/

//On mouse over change value ? 





// Add click event listeners to all the keys
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function(e) {
    // Get the current value of the calculator display
    var currentValue = result.value;

    // Get the value of the key that was clicked
    var keyValue = e.target.value;

    // Handle the clear button
    if (keyValue === "C") {
      result.value = "";
    }

    // Handle the equals button
    else if (keyValue === "=") {
      // Evaluate the expression and display the result
      result.value = eval(currentValue);
    }
    
    //Handle the one key clear button , need to understand more
    else if(keyValue === "clear"){
        result.value = 'Fix Needed! soon';
    }

    // Handle teh rest keys
    else {
      result.value = currentValue + keyValue;
    }
  });
}

