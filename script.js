function newGame () {
  let again = true;
  let game = 0;
  while (again == true) {
    games++;
    if (game > 1) {
      again = confirm("Play again?" )
    }
    guessGame

    }
  }

function newGame (){

   let answer = Math.floor(Math.random()*100)+1
  let guess = 0;
  while (guess !== answer) {
    let input = prompt("Guess a number (1-100) or type 'q' to quit:");
    if (input === null || input.toLowerCase() === 'q') {
      alert ("Quitter!");
      break;
    }
    guess = Number(input);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      alert("Bad input! Please enter a number between 1 and 100.");
    } else if (guess === answer) {
      alert("Correct! The numbder was " + answer);
      break;
    } else if (guess > answer) {
      alert("Too high!");
    } else {
      alert("Too low!");
    }
  }
}

