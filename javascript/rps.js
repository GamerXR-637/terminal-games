const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter a option? [Enter "Help" for a list] ', (answer) => {
  const valid = ["help", "rock", "paper", "scissors", "37"];

  if (!valid.includes(answer.toLowerCase())) {
    console.log(
      'Please enter a valid value:\n"help", "rock", "paper", "scissors"'
    );
  }
  const listN = [
    "Bob",
    "Moon",
    "Lily",
    "Timmy",
    "Jimmy",
    "Alex",
    "Alexis",
    "Alexander",
    "Jaenerys",
    "Alica",
    "Amber",
    "Robbie",
    "Ash",
    "Ayden",
    "Camille",
    "Dude",
  ];
  let options = ["rock", "paper", "scissors"];

  let terminalOP = options[Math.floor(Math.random() * options.length)];
  let Name = listN[Math.floor(Math.random() * listN.length)];
  if (answer.toLowerCase() === terminalOP) {
    console.log("It a tie!!");
  } else if (
    (answer === "rock" && terminalOP === "scissors") ||
    (answer === "paper" && terminalOP === "rock") ||
    (answer === "scissors" && terminalOP === "paper")
  ) {
    console.log(`You chose: ${answer}`);
    console.log(`${Name} chose: ${terminalOP}`);
    console.log("You win!!");
  } else if (answer === "37") {
    console.log(`You chose: ${answer}`);
    console.log(`${Name} chose: ${terminalOP}`);
    console.log(
      "You summon the gods from above and below and you disintegrated you rival from the face of the earth! Nice!"
    );
  } else if (answer.toLowerCase() == "help") {
    console.log(
      "You need help RPS? Who need help!! You loser!!\nYou lost automatically"
    );
  } else {
    console.log(`You chose: ${answer}`);
    console.log(`${Name} chose: ${terminalOP}`);
    console.log("You lost! wow");
  }
  rl.close();
});
