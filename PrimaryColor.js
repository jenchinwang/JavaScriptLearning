var input = prompt("What's your favorite primary color?","Type your favorite color here");
var color = input.toLowerCase();
switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  //Add your case here!
  case 'yellow':
    console.log("Yellow is an excellent choice!");
    break;
  default:
    console.log("I don't think that's a primary color!");
}