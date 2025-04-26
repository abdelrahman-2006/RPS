let humanScore = 0;
let botScore = 0;
let botChoice = document.getElementById('botchoice');
let humanChoice = document.getElementById('humanchoice');
let humanCount = document.getElementById('humancount');
let botCount = document.getElementById('botcount')
let header = document.getElementById('header')
let buttons = document.getElementById('buttons');
let rock = document.querySelector('#rock')
let scissors = document.querySelector('#scissors')
let paper = document.querySelector('#paper')
function addResetButton(){
    buttons.innerHTML = "<button id='reset'>Reset</button>";
    document.querySelector('#reset').addEventListener('click', () => {
        resetGame();
    });
    
}
function botOutput() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        botChoice.textContent = 'rock';
        return 'rock';
    } else if (randomNumber < 2 / 3) {
        botChoice.textContent = 'paper';
        return 'paper';
    } else {
        botChoice.textContent = 'scissors';
        return 'scissors';
    }
}

function gameLogic(BotOutput, HumanChoice) {
    if ((HumanChoice === 'paper' && BotOutput === 'rock') ||
        (HumanChoice === 'scissors' && BotOutput === 'paper') ||
        (HumanChoice === 'rock' && BotOutput === 'scissors')) {
        humanScore += 1;
        humanCount.textContent = humanScore;
        console.log('Human score:', humanScore);
    } else if (HumanChoice === BotOutput) {
        console.log('Draw');
    } else {
        botScore += 1;
        botCount.textContent = botScore;
        console.log('Bot score:', botScore);
    }

    if (humanScore === 3) {
        header.textContent = "You win!";
        gameDone = true;
        addResetButton()
    } else if (botScore === 3) {
        header.textContent = "You lose!";
        gameDone = true;
        addResetButton()
    }
}

function resetGame() {
    humanScore = 0;
    botScore = 0;
    gameDone = false;
    header.textContent = "Score";
    humanChoice.textContent = "none";
    botChoice.textContent = "none";
    buttons.innerHTML = 
        "<button id='rock'>Rock</button>" +
        "<button id='scissors'>Scissors</button>" +
        "<button id='paper'>Paper</button>";
    document.querySelector('#rock').addEventListener('click', () => {
        playGame('rock');
        humanChoice.textContent = 'rock';
    });
    document.querySelector('#scissors').addEventListener('click', () => {
        playGame('scissors');
        humanChoice.textContent = 'scissors';
        
    });
    
    document.querySelector('#paper').addEventListener('click', () => {
        playGame('paper');
        humanChoice.textContent = 'paper';
    });
    humanCount.textContent = humanScore;
    botCount.textContent = botScore;
}
function playGame(HumanChoice) {
    let BotOutput = botOutput();
    gameLogic(BotOutput, HumanChoice);
}

rock.addEventListener('click', () => {
    playGame('rock');
    humanChoice.textContent = 'rock';
});
paper.addEventListener('click', () => {
    playGame('scissors');
    humanChoice.textContent = 'scissors';
    
});

paper.querySelector('#paper').addEventListener('click', () => {
    playGame('paper');
    humanChoice.textContent = 'paper';
});
    