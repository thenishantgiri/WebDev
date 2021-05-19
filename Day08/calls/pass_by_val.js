var quidditchWinner = "Harry Potter";

function changeWinner(winner) {
  console.log("Original Winner : " + winner);
  winner = "Draco Malfoy";
  console.log("Changed Winner : " + winner);
}

console.log("The winner was " + quidditchWinner);

changeWinner(quidditchWinner);

console.log("Now the winner is " + quidditchWinner);
