'use strict';

// generates random number between 1 - 20
var secretNumber = Math.trunc(Math.random() * 20) + 1;

// set score and highscore
var score = 20,
    highscore = 0;
document.querySelector('.score').textContent = 20;
document.querySelector('.highscore').textContent = highscore;

// function to display message
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

// EventListener for click of button check
document.querySelector('.check').addEventListener('click', function(e) {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (score > 0) {
        // check if user input is not blank
        if (!guess) {
            displayMessage('⛔️ No number!!!');
            score--;
            document.querySelector('.score').textContent = score;

            // User wins if guess equal to secret number
        } else if (guess === secretNumber) {
            displayMessage('🥳 Winner Winner!!! Chicken Dinner!!!');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('body').style.backgroundColor = '#60b347';
            // set highscore
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = score;
            }
        } else if (guess !== secretNumber) {
            displayMessage(
                guess > secretNumber ? '📉  Too High!!!' : '📈  Too Low!!!'
            );
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        displayMessage('You lost the game!!!!');
    }
});

// Event Listner for click of button again
document.querySelector('.again').addEventListener('click', function() {
    // reset input, score, message, generate new random number
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.guess').value = '';
    displayMessage('Start Guessing.....');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem;';
    document.querySelector('body').style.backgroundColor = '#222';
});