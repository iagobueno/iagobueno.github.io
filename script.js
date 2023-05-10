function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 1) {
        return "rock";
    }
    else if (choice == 2) {
        return "paper"
    }
    return "scissors";
}

function returnEmoji(string) {
    if (string == "rock") {
        return "🧱";
    }
    else if (string == "paper") {
        return "📜";
    }
    else {
        return "✂️";
    }
}

function game(pChoice, cChoice) {

    console.log(playerChoice);
    console.log(computerChoice);

    if (pChoice == cChoice) {
        return "It's a Draw!"
    }

    switch (pChoice) {
        case "rock":
            if (cChoice == "paper") {
                computerScore++;
                return "Paper rules rock, you loose!";
            }
            playerScore++;
            return "Rock rules scissors, you win!";
        case "paper":
            if (cChoice == "rock") {
                playerScore++;
                return "Paper rules rock, you win!";
            }
            computerScore++;
            return "Scissors rules paper, you loose!";

        case "scissors":
            if (cChoice == "rock") {
                computerScore++;
                return "Rock rules scissors, you loose!";
            }
            playerScore++;
            return "Scissors rules paper, you win!";

        default:
    }
}

// Mostra o resultado após a função Game decidir o resultado
function showResults(r) {
    // Altera a string de resultado
    const result = document.getElementById("result");
    result.innerHTML = r;

    // Altera o score global
    const score = document.getElementById("score");
    score.innerHTML = `${playerScore} VS ${computerScore}`;

    // Altera o emoji do player
    const playerEmj = document.getElementById("player-emoji");
    console.log(playerChoice);
    playerEmj.innerHTML = returnEmoji(playerChoice);

    // Altera o emoji do computador
    const computerEmj = document.getElementById("computer-emoji");
    console.log(computerChoice);
    computerEmj.innerHTML = returnEmoji(computerChoice);

}

// Váriáveis globais

let computerScore = 0;
let playerScore = 0;
let computerChoice = getComputerChoice();
let playerChoice;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");



// Eventos de escuta do mouse

rock.addEventListener("click", () => {
    playerChoice = "rock";
    let result = game(playerChoice, computerChoice);
    showResults(result);
    computerChoice = getComputerChoice();
});

paper.addEventListener("click", () => {
    playerChoice = "paper";
    let result = game(playerChoice, computerChoice);
    showResults(result);
    computerChoice = getComputerChoice();
});

scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    let result = game(playerChoice, computerChoice);
    showResults(result);
    computerChoice = getComputerChoice();
});