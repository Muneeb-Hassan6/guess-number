'use strict';
let secretNumber;
const num = document.querySelector('.number');
const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const body = document.querySelector('body');
let limit = 3;

// FUNCTIONS

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const secretNum = function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
};

// WORKING
secretNum();
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score.textContent > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score.textContent -= 1;
      limit--;
    } else {
      score.textContent = 0;
      displayMessage('💥 You Lose!');
      body.style.backgroundColor = '#f03e3e';
    }
    if (limit === 0) {
      score.textContent = 0;
      displayMessage('💥 You Lose!');
      body.style.backgroundColor = '#f03e3e';
    }
  }
  // when player wins
  else {
    displayMessage('🎉 Correct answer!');
    body.style.backgroundColor = '#099268';
    num.style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score.textContent > highscore.textContent)
      highscore.textContent = score.textContent;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNum();
  score.textContent = '10';
  num.style.width = '15rem';
  limit = 3;
  body.style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  num.textContent = '?';
  document.querySelector('.guess').value = '';
});
