// Write your loop below!
var control = true;

for (i=0; i<11; i++) {
    console.log("final countdown: " + (10-i))
}

while (control) {
    coin = Math.floor(Math.random()*2);
    if (coin) {
        console.log("Finally we get here!");
        control = false;
    } else {
        console.log("Please try again");
    }
}