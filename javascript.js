  function computerPlay(computerSelection) {
    let choices = ["rock", "paper", "scissors"];
    computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
  };

  function game(RockPaperScissors) {
    let msg = "";
    let computerSelection = computerPlay();
    let playerSelection = prompt("Play against the CPU\nType Rock, Paper or Scissors:");
    if ((computerSelection == "rock" && playerSelection.toLowerCase() == "rock") || (computerSelection == "paper" && playerSelection.toLowerCase() == "paper") || (computerSelection == "scissors" && playerSelection.toLowerCase() == "scissors")) {
      let winner = "it's a TIE!";
      counter++;
      msg = "ROUND: " + counter + "\nYOU: " + playerSelection + "\nCPU: " + computerSelection + "\n" + winner + "\nSCORE: YOU " + playerScore + " vs " + computerScore + " CPU";
    } else if ((computerSelection == "rock" && playerSelection.toLowerCase() == "scissors") || (computerSelection == "scissors" && playerSelection.toLowerCase() == "paper") || (computerSelection == "paper" && playerSelection.toLowerCase() == "rock")) {
        let winner = "CPU WON!";
        computerScore++;
        counter++;
        msg = "ROUND: " + counter + "\nYOU: " + playerSelection + "\nCPU: " + computerSelection + "\n" + winner + "\nSCORE: YOU " + playerScore + " vs " + computerScore + " CPU";
    } else if ((computerSelection == "rock" && playerSelection.toLowerCase() == "paper") || (computerSelection == "scissors" && playerSelection.toLowerCase() == "rock") || (computerSelection == "paper" && playerSelection.toLowerCase() == "scissors")) {
        let winner = "YOU WON!";
        playerScore++;
        counter++;
        msg = "ROUND: " + counter + "\nYOU: " + playerSelection + "\nCPU: " + computerSelection + "\n" + winner + "\nSCORE: YOU " + playerScore + " vs " + computerScore + " CPU";
      }
    return alert (msg);
  };  
  
  let winner = "";
  let playerScore = 0;
  let computerScore = 0;
  let counter = 0; 
  
  function play(fiverounds) {
    for (let round = 1; round < 6; round++) {
      if (winner == "CPU WON!") {
        computerScore++;
        counter++;
      } else if (winner == "YOU WON!") {
        playerScore++;
        counter++;
      }
      game();   
    }
  }

  play();