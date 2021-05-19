var quidditchWinners = ["Harry", "Ron", "Hermoine"];

function changeWinners(winner) {
  winner[0] = "Draco";
  winner[1] = "Crabbe";
  winner[2] = "Pansy";
}

console.log("The winners were " + quidditchWinners);

changeWinners(quidditchWinners);

console.log("Now the winners are " + quidditchWinners);
