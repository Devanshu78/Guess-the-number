
let randomGuesses = parseInt(Math.random() * 100 + 1);
const inputGuesses = document.querySelector('#inputGuesses');
const submit = document.querySelector('.submitButton');
const chancesLeft = document.querySelector('.chancesLeft');
const previousGuess = document.querySelector('.previousGuess');
const reslutpara = document.querySelector('.reslutpara');
const lowOrHigh = document.querySelector('.lowOrHigh');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(inputGuesses.value);
        validGuess(guess);
    })
}

function validGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number`)
    }
    else if (guess > 100){
        alert(`Please enter the number between 1 and 100`)
    }
    else if(guess < 1){
        alert(`Please enter the number between 1 and 100`)
    }
    else{
        prevGuess.push(guess);
        if(numGuess == 10){
            displayGuess(guess);
            displayMessage(`Game over , Random number is ${randomGuesses}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess === randomGuesses){
        displayMessage(`You won!! , the ranadom guess is ${randomGuesses} `);
        endGame();
    }
    else if (guess < randomGuesses){
        displayMessage(`Your number is TOOO LOW`);
    }
    else {
        displayMessage(`Your number is TOO High`);
    }
}


function displayGuess(guess){
    inputGuesses.value = '';
    previousGuess.innerHTML += `${guess} , `;
    numGuess ++;
    chancesLeft.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h3> ${message}</h3>`
}

function endGame(){
    inputGuesses.value = '';
    inputGuesses.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h3 id= "newGame"> Start a new game </h3>`;
    reslutpara.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click' , function(e){
        randomGuesses = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        previousGuess.innerHTML = '';
        chancesLeft.innerHTML = `${11 - numGuess}`;
        displayMessage('');
        inputGuesses.removeAttribute('disabled');
        reslutpara.removeChild(p);
        playGame = true;
    })  
}
