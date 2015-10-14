var isEven = function(number) {
  // Your code goes here!
  if (isNaN(number)) {
    return ("Please enter a number.")
  } else if (number % 2 === 0) {
    return true;
  } else {
    return false  
  };
};

var evaluation = prompt("Please enter a number: ");
console.log("Is the number entered even?");
isEven(evaluation);