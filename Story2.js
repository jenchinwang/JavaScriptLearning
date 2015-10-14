var user = prompt("How brave you are? Are you 'REALLY BRAVE', 'AVERAGE BRAVE', or 'NOT BRAVE AT ALL'?").toUpperCase();

switch (user) {
    case 'REALLY BRAVE':
        var fight = prompt("Would you fight a lion? 'YES' or 'NO'").toUpperCase();
        var scare = prompt("Would you be scared? 'YES' or 'NO'").toUpperCase();
        if (fight === "YES" && scare === "NO") {
            console.log('You have a lion heart, and one day you will be eaten by a lion.');
        } else {
            console.log('You may not as brave as you think, but good thing is you are not complete out of you mind.')
        }
        break;
    case 'AVERAGE BRAVE':
        var stomp = prompt("Would you stomp on a cockroach? 'YES' or 'NO'").toUpperCase();
        var pepper = prompt("Would you eat jalapeno raw? 'YES' or 'NO'").toUpperCase();
        if (stomp === "YES" || pepper === "Yes") {
            console.log('It\'s okay. You are just like average folks.');
        } else if (stomp === "No" || pepper === "No") {
            console.log('Are you sure you are not belonging to the \'NOT BRAVE AT ALL\' bucket?');
        } else {
            console.log('I will give you that.');
        }        
        break;
    case 'NOT BRAVE AT ALL':
        console.log('Coward!!!!')
        break;
    default:
        console.log('I am sorry. Please answer again.')
}