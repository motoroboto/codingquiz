var timeEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answers');
var resultsEl = document.getElementById('results');
var greetingText = document.getElementById('greeting');
var secondsLeft = 60;
var progress = 0;
var score = 0;
var test;
var question;
var a;
var b;
var c;
var answer;



var testQuestions = [
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
}
];

function quiz() {
    JSON.stringify(testQuestions)
    var h = document.createElement("h1");
    var q = document.createTextNode(testQuestions[0].question);
    h.appendChild(q);
    questionEl.appendChild(h);
    var br = document.createElement("br")
    questionEl.appendChild(br)
    var button1 = document.createElement("button");
    var answer1 = document.createTextNode(testQuestions[0].a);
    button1.appendChild(answer1);
    questionEl.appendChild(button1);
    var br = document.createElement("br")
    questionEl.appendChild(br)
    var button2 = document.createElement("button");
    var answer2 = document.createTextNode(testQuestions[0].b);
    button2.appendChild(answer2);
    questionEl.appendChild(button2);
    var br = document.createElement("br")
    questionEl.appendChild(br)
    var button3 = document.createElement("button");
    var answer3 = document.createTextNode(testQuestions[0].c);
    button3.appendChild(answer3);
    questionEl.appendChild(button3);
    // appendChild(answer1)
    // questionEl.h1 = testQuestions[0].question;
}

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

quiz()  
}

function sendMessage() {
  timeEl.textContent = '';
  

}
document.getElementById('startquiz').addEventListener('click', quizBegin);
