function getComputerChoice() {
    // let choice = Math.floor(Math.random() * 3);
    let choice = 1;
    if (choice == 1) {
        return "rock";
    }
    else if (choice == 2) {
        return "paper"
    }
    return "scissors";
}

function returnOptEmoji(string) {
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

function returnComputerEmoji(string) {

    diff = computerScore - playerScore;

    if (diff < -9) {
        return "🔌";
    }
    if (diff >= -9 && diff < -4) {
        return "🖨️";
    }
    else if (diff >= -4 && diff < 5) {
        return "💻";
    }
    else if (diff >= 5 && diff < 10) {
        return "🤖";
    }
    else { return "🚀" };

}

function returnPlayerEmoji(string) {

    diff = playerScore - computerScore;

    if (diff < -9) {
        return "😭";
    }
    if (diff >= -9 && diff < -4) {
        return "😓";
    }
    else if (diff >= -4 && diff < 5) {
        return "🤠";
    }
    else if (diff >= 5 && diff < 10) {
        return "😅";
    }
    else { return "😎" };

}

function game(pChoice, cChoice) {

    if (pChoice == cChoice) {
        gameStatus = "draw";
        return "It's a Draw!";
    }

    switch (pChoice) {
        case "rock":
            if (cChoice == "paper") {
                gameStatus = "loose";
                computerScore++;
                return "Paper rules rock, you loose!";
            }
            playerScore++;
            gameStatus = "win";
            return "Rock rules scissors, you win!";
        case "paper":
            if (cChoice == "rock") {
                playerScore++;
                gameStatus = "win";
                return "Paper rules rock, you win!";
            }
            computerScore++;
            gameStatus = "loose";
            return "Scissors rules paper, you loose!";

        case "scissors":
            if (cChoice == "rock") {
                computerScore++;
                gameStatus = "loose";
                return "Rock rules scissors, you loose!";
            }
            playerScore++;
            gameStatus = "win";
            return "Scissors rules paper, you win!";

        default:
    }
}

function boardColor(side) {

    if (gameStatus == "win") {
        if (side == "left") {
            return "#adcae6";
        }
        return "#ff726f";
    }
    else if (gameStatus == "loose") {
        if (side == "left") {
            return "#ff726f";
        }
        return "#adcae6";
    }

    return "#d3d3d3";
}

function resetGame() {
    computerScore = 0;
    playerScore = 0;
    computerChoice = getComputerChoice();

    const yellow = "#f8ff1d";
    const leftBox = document.getElementById("left");
    leftBox.style.backgroundColor = yellow;

    // Altera a cor da caixa à direita
    const rightBox = document.getElementById("right");
    rightBox.style.backgroundColor = yellow;

    const score = document.getElementById("score");
    score.innerHTML = `${playerScore} VS ${computerScore}`;

    // Altera o emoji do player
    const playerEmj = document.getElementById("player-emoji");
    playerEmj.innerHTML = "🤠";

    // Altera o emoji do computador
    const computerEmj = document.getElementById("computer-emoji");
    computerEmj.innerHTML = "💻";

    const result = document.getElementById("result");
    result.innerHTML = "Let's start again!";
}

// Mostra o resultado após a função Game decidir o resultado
function showResults(r) {
    // Altera a string de resultado
    const result = document.getElementById("result");
    result.innerHTML = r;

    // Altera o score global
    const score = document.getElementById("score");
    pEmoji = returnPlayerEmoji();
    cEmoji = returnComputerEmoji();
    score.innerHTML = `${pEmoji} ${playerScore} VS ${computerScore} ${cEmoji}`;

    // Altera o emoji do player
    const playerEmj = document.getElementById("player-emoji");
    playerEmj.innerHTML = returnOptEmoji(playerChoice);

    // Altera o emoji do computador
    const computerEmj = document.getElementById("computer-emoji");
    computerEmj.innerHTML = returnOptEmoji(computerChoice);

    // Altera a cor da caixa à esquerda
    const leftBox = document.getElementById("left");
    leftBox.style.backgroundColor = boardColor("left");

    // Altera a cor da caixa à direita
    const rightBox = document.getElementById("right");
    rightBox.style.backgroundColor = boardColor("right");
}

// Váriáveis globais

let computerScore = 0;
let playerScore = 0;
let computerChoice = getComputerChoice();
let playerChoice;
let gameStatus;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const f5 = document.getElementById("f5");

console.log(f5);

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

f5.addEventListener("click", () => {
    resetGame();
});