function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  let computerChoice = options[randomIndex];
  return computerChoice;
}

function playRound(playerSelection) {
  let computerChoice = getComputerChoice();
  let playerChoice = playerSelection;
  let winner = null;

  console.log("Computer:", computerChoice);
  console.log("Player:", playerChoice);

  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
    return winner;
  }

  if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      console.log("You Lose! Paper beats rock");
      winner = "computer";
      }
    else if (computerChoice === "scissors") {
      console.log("You Win! Rock beats scissors");
      winner = "player";
    }
  }
  else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You Win! Paper beats rock");
      winner = "player";
    }
    else if (computerChoice === "scissors") {
      console.log("You Lose! Rock beats scissors");
      winner = "computer";
    }
  }
  else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      console.log("You Lose! Rock beats scissors");
      winner = "computer";
    }
    else if (computerChoice === "paper") {
      console.log("You Win! Scissors beats paper");
      winner = "player";
    }
  }

  return winner;
}

function verifyinput(scores, target) {
  if (target.nodeName === "BUTTON") {
    let winner = playRound(target.id);
    keepScore(scores, winner);
    checkWins(scores);
  }
}

function keepScore(scores, winner) {
  if (winner === "player") scores.playerWins++;
    else if (winner === "computer") scores.computerWins++;

  const score = document.querySelector('#score');
  score.textContent = `Player ${scores.playerWins} - ${scores.computerWins} Computer`

}

function checkWins(scores) {
  if (scores.playerWins === 5 || scores.computerWins === 5) {
    let message;
    if (scores.playerWins > scores.computerWins) {
      message = 'You win!';
    }
    else {
      message = 'You Lose!';
    }

    const scoreBoard = document.querySelector('#scoreboard');
    const resultPara = document.createElement('p');
    resultPara.textContent = message;
    scoreBoard.appendChild(resultPara);

  }
}

function game() {
    let scores = {
      playerWins: 0,
      computerWins: 0
    };

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', event => {
       verifyinput(scores,event.target)
      })
    });
}

game();