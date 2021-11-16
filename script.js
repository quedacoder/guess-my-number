'use strict';

// generates random number between 1 - 20
var secretNumber = Math.trunc(Math.random() * 20) + 1;

// set score and highscore
var score = 20,
    highscore = 0;
document.querySelector('.score').textContent = 20;
document.querySelector('.highscore').textContent = highscore;

// EventListener for click of button check
document.querySelector('.check').addEventListener('click', function(e) {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (score > 0) {
        if (!guess) {
            document.querySelector('.message').textContent = '⛔️ No number!!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent =
                '🥳 Winner Winner!!! Chicken Dinner!!!';
            document.querySelector('.number').textContent = secretNumber;
            // set highscore
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = score;
            }
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = '📉  Too High!!!';
            score--;
            document.querySelector('.score').textContent = score;
        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = '📈  Too Low!!!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    } else {
        document.querySelector('.message').textContent = 'You lost the game!!!!';
    }
});

// Event Listner for click of button again
document.querySelector('.again').addEventListener('click', function() {
    // reset input, score, message, generate new random number
    document.querySelector('.score').textContent = 20;
    score = 20;
    document.querySelector('.guess').value = 0;
    document.querySelector('.message').textContent = 'Start Guessing.....';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').textContent = '?';
});