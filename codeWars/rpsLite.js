// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!

const rps = (p1, p2) => {
  // create rules to determine which options result in a winner 
  // create a cache to store game rules?

  // * sanitize inputs
  let p1Choice = p1.toLowerCase();
  let p2Choice = p2.toLowerCase();

  // * create if statements to generate game results
  if(p1Choice === 'scissors' && p2Choice === 'paper'){
    return 'Player 1 won!'
  } else if (p1Choice === 'scissors' && p2Choice === 'rock') {
    return 'Player 2 won!';
  } else if (p1Choice === 'paper' && p2Choice === 'rock') {
    return 'Player 1 won!';
  } else if (p1Choice === 'paper' && p2Choice === 'scissors') {
    return 'Player 2 won!';
  } else if (p1Choice === 'rock' && p2Choice === 'paper') {
    return 'Player 2 won!';
  } else if (p1Choice === 'rock' && p2Choice === 'scissors') {
    return 'Player 1 won!';
  } else if (p1Choice === 'rock' && p2Choice === 'rock' || p1Choice === 'paper' && p2Choice === 'paper' || p1Choice === 'scissors' && p2Choice === 'scissors') {
    return 'Draw!';
  }

}



// * test cases!
console.log(rps('scissors','paper')); // Player 1 won!
console.log(rps('scissors','rock')); // Player 2 won!
console.log(rps('paper','paper')); // Draw!
