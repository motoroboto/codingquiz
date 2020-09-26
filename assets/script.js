var timeEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var resultsEl = document.getElementById('results');
var greetingText = document.getElementById('greeting');
var secondsLeft = 60;
var progress = 0;
var score = 0;
var questionHeader = document.getElementById('questionheader')



var question01 = {
    question: "What is java?",
    answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"]
}
var question02 = {
  question: "What is java?",
  answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"]
}
var question03 = {
  question: "What is java?",
  answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"]
}
var question04 = {
  question: "What is java?",
  answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"]
}
var question05 = {
  question: "What is java?",
  answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"]
}


function quiz() {
        
  questionHeader.textContent = question01.question;
  var answers = question01.answers;
  for (var i = 0; i < answers.length; i++) {
      var li = document.createElement("li");
      li.setAttribute("class", "button btn");
      li.setAttribute("id", [i]);
      li.textContent = answers[i];
      var br = document.createElement("br");
      questionEl.appendChild(li);
      questionEl.appendChild(br);
  };  
};
questionEl.addEventListener("click", function(event) {
  if (event.class === 'button'); {
  secondsLeft = secondsLeft - 10
  }
});

function quizBegin() {
    greetingText.innerHTML = '';
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft <= 0) {
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
