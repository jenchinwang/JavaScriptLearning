// Game: Rock Paper Scissors
// The game begins with ask the user to choose 
// between rock, paper and scissors 
var userChoice = prompt("Do you choose rock, paper or scissors?");
// Generate a computer choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} 
else {
	computerChoice = "scissors";
} 
// Print computer choice
console.log("Computer: " + computerChoice);
// Function compare to compare results
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
    return("The result is a tie!");  
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return("rock wins");
        }
        else {
            return("paper wins");
        };
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return("paper wins");
        }
        else {
            return("scissors wins");
        };
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return("scissors wins");
        }
        else {
            return("rock wins");
        };
    }
};
// Call function to compare results and rule who is the winner
compare(userChoice,computerChoice);