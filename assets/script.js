var timeEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');
var resultsEl = document.getElementById('results');
var greetingText = document.getElementById('greeting');
var secondsLeft = 60;
var progress = 0;
var score = 0;


var questions = [
{
    question: "what is java?",
    a: "coffee",
    b: "a coding language",
    c: "a color"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
},
{
    question: "what is HTML?",
    a: "hyper text markup language",
    b: "have the most laughs",
    c: "his time may last"
}
];



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
