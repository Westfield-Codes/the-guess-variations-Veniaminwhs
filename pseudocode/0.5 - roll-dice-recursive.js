// Create a global variable called turns, set it equal to 0

/* Define a function called rollDice */

  // create a variable called roll, set it equal to random 1-6
  let roll = Math.floor(Math.random()*6+1);

  // add 1 to turns

  // if roll equals 6, display "6! You won in [turns] turns."

  // otherwise:

  // use a confirm and say: "You rolled a [roll]"

  // then call rollDice again.

  // close the else block

// close the function block
var counter = 0;
function rollDice(){

  let roll = Math.floor(Math.random()*6)+1;
  counter += 1;

  if (roll == 6) {
     alert("6! You won " + counter);
counter = 0;
    }

  else if (roll > 8){
     alert("You ran over 8");
  }
  else {

      rollDice();

  }

}