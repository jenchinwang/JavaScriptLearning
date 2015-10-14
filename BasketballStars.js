var answer = prompt("Who is your favorite basketball star?");
var bballStar = answer.toLowerCase()
switch(bballStar) {
  case 'kobe bryant':
    console.log("You are old, aren't you?");
    break;
  // Add your code here!
  case 'lebron james':
    console.log("He is definitely the best in the league!");
    break;
  case 'anthony davis':
    console.log("Anthony Davis has a bright future.");
    break;
  default:
    console.log("Let's focus on basketball here.");
}