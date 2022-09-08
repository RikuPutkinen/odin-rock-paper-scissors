function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = options[randomIndex];
    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice;
    while (true) {
        playerChoice = prompt("Pick rock, paper or scissors:", "");
        playerChoice = playerChoice.toLowerCase();
        console.log(playerChoice);
        if (!(playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors")) {
            alert("Invalid option. Try again.");
        }
        else break;
    }
    return playerChoice;
}

function playRound() {
    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
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

function game() {
    let keepGoing = true;
    let playerWins = 0;
    let computerWins = 0;
    let rounds = 0;

    while (keepGoing) {
        let winner = playRound();

        if (winner === "player") playerWins++;
        else if (winner === "computer") computerWins++;
        rounds++;

        if (playerWins === 3 || computerWins === 3 || rounds >= 5) {
            if (playerWins === computerWins) continue;
            else if (playerWins > computerWins) {
                console.log(`You win! Player ${playerWins} - ${computerWins} Computer`);
                keepGoing = false;
            }
            else {
                console.log(`You Lose! Player ${playerWins} - ${computerWins} Computer`);
                keepGoing = false;
            }
        }  
    }
}

game();