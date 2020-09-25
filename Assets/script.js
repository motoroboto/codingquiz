var timeEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');
var resultsEl = document.getElementById('results');
var greetingText = document.getElementById('greeting');
var secondsLeft = 60;

function quizBegin() {
    greetingText.innerHTML = '';
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = '';

}

document.getElementById('startquiz').addEventListener('click', quizBegin);