var slaying = true;
// A bit of new math magic to calculate the odds
// of hitting the dragon. We'll cover this soon!
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    damageThisRound = Math.floor(Math.random() * 5 + 1);
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;
    
    if (totalDamage >= 10) {
      console.log("You did it! You slew the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("The dragon burninates you! You're toast.");
    slaying = false;
  }
}

// My version
/*var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        damageThisRound = Math.floor(Math.random()*5 + 1);
        console.log("You hit the dragon! You did damage of " + damageThisRound);
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You have slayed the dragon, hooray!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        };
    } else {
        console.log("Oh no you missed! Dragon defeats you.");
        slaying = false;
    };      
};*/