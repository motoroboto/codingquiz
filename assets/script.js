var timeEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var resultsEl = document.getElementById('results');
var greetingText = document.getElementById('greeting');
var questionHeader = document.getElementById('questionheader')
var secondsLeft = 60;
var progress = 0;


var questions = [
  {
    question: "What is java?",
    answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"],
    correct: 1
    },
  {
    question: "What else is java?",
    answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"],
    correct: 2
    },
  {
    question: "Something Else?",
    answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"],
    correct: 3
    },
  {
    question: "Another java thing?",
    answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"],
    correct: 0
    },
  {
    question: "What isn't again?",
    answers: ["A: Coffee", "B: A Coding Language", "C: A Color", "D: some other option"],
    correct: 3
    }
]

function quiz() {
      cq = progress;  
  console.log('progress:', progress);
  console.log('currentquestion:', cq);
  questionHeader.textContent = questions[cq].question;
  console.log('textContent:', questionHeader.textContent);
  console.log('question:', questions[cq].question);
  for (var i = 0; i < 4; i++) {
      var li = document.createElement('li');
      li.setAttribute('class', 'button btn');
      li.setAttribute('id', [i]);
      console.log('i:', li.id)
      li.textContent = questions[cq].answers[i];
      var br = document.createElement('br');
      questionEl.appendChild(li);
      questionEl.appendChild(br);
  };  
};

questionEl.addEventListener('click', function(event) {
  var target = event.target;
  console.log('target:', target)
  if (target.id == questions[cq].correct) {
    console.log('correct:', questions[cq].correct)
    console.log('id:', target.id)
    resultsEl.textContent = 'Good Job'; 
    progress = progress +1;
    console.log('progress:', progress);
    questionEl.textContent = '';
    questionHeader.textContent = '';
    quiz()
    setTimeout(function(){ 
      resultsEl.textContent = '';
  }, 1000);
  } else {
    console.log('correct:', questions[cq].correct)
    console.log('id:', target.id)
    secondsLeft = secondsLeft - 10;
    resultsEl.textContent = "You Lost 10 seconds, Hot Shot!";
    setTimeout(function(){ 
      resultsEl.textContent = '';
  }, 1000);
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
