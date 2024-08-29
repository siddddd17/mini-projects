let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let result;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resultDiv = document.querySelector('.result');

rock.addEventListener('click', () =>{
    clearResult(resultDiv);
    playRound('rock')
});
paper.addEventListener('click', () =>{
    clearResult(resultDiv);
    playRound('paper');
});
scissors.addEventListener('click', () =>{
    clearResult(resultDiv);
    playRound('scissors')
});

function showResult(winner) {
    const para = document.createElement('p');
    if (winner === 'draw') {
        para.textContent = `It's a draw`;
        resultDiv.appendChild(para);
    } else if (winner === 'player') {
        para.textContent = 'Player Wins!';
        resultDiv.appendChild(para);
    } else {
        para.textContent = 'Computer Wins!';
        resultDiv.appendChild(para);
    }
}

function clearResult(element){
    element.innerHTML='';
}

function computerChoice() {
    let number = Math.random();
    if (number < 0.34) {
        return 'rock';
    } else if (number < 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function monitorScore() {
    const para = document.createElement('p');
    para.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
    resultDiv.appendChild(para);
}

function finalResult() {
    const para = document.createElement('p');
    if (playerScore > computerScore) {
        para.textContent = 'You won! Humanity lives';
    } else {
        para.textContent = 'You lost! Best of luck in some other universe';
    }
    resultDiv.appendChild(para);
}

function playRound(playerSelection, computerSelection = computerChoice()) {

    if (computerScore < 5 && playerScore < 5) { 
        if (playerSelection === 'rock' && computerSelection === 'rock') {
            result = 'draw';
        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            result = 'computer';
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;
            result = 'player';
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            result = 'player';
        } else if (playerSelection === 'paper' && computerSelection === 'paper') {
            result = 'draw';
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            result = 'computer';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            result = 'computer';
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            result = 'player';
        } else {
            result = 'draw';
        }

        monitorScore(); 
        showResult(result);

        if (computerScore >= 5 || playerScore >= 5) {
            finalResult();
        }
    }
}










