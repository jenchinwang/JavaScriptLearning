// Check if the user is ready to play!
confirm("Are you ready to play?");

// Check user's age
var age = prompt("What's your age");

if (age < 13)
{
    console.log("You are allowed to play but I take no responsibility...");
}
else
{
    console.log("Welcome to play!");
}

// And where the story begins...
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");

console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

// What would you respond?
var userAnswer = prompt("Do you want to race Bieber on stage?");

if (userAnswer === "yes")
{
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else
{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

// We would like to have your feedback!
var feedback = prompt("Rate this game on a scale from 1 to 10")

if (feedback > 8)
{
    console.log("Thank you! We should race at the next concert!")
}
else
{
    console.log("I'll keep practicing coding and racing.");
}