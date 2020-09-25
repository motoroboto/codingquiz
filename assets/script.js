var timeEl = document.getElementById('timer');
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var results = document.getElementById('results');
var secondsLeft = 60;

function quizBegin() {
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
  timeEl.textContent = " ";

}

document.getElementById('startquiz').addEventListener('click', quizBegin);
