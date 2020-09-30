var timeEl = document.getElementById('timer');
var scoreEl = document.getElementById('score');
var questionEl = document.getElementById('questiondiv');
var resultsEl = document.getElementById('resultsdiv');
var winnerEl = document.getElementById('winnerdiv');
var mainH1El = document.getElementById('mainH1');
var mainPEl = document.getElementById('mainP');
var greetingText = document.getElementById('greetingdiv');
var questionText = document.getElementById('questionheader');
var submitButton = document.getElementById('submit');
var secondsLeft = 60;
var progress = 0;
var questionArray = [
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
  questionText.textContent = questionArray[cq].question;
  for (var i = 0; i < 4; i++) {
      var li = document.createElement('li');
      li.setAttribute('class', 'button btn');
      li.setAttribute('id', [i]);
      li.textContent = questionArray[cq].answers[i];
      var br = document.createElement('br');
      questionEl.appendChild(li);
      questionEl.appendChild(br);
  };  
};

questionEl.addEventListener('click', function(event) {
  var target = event.target;
  if (target.id == questionArray[cq].correct) {
    resultsEl.textContent = 'Good Job'; 
    progress = progress +1;
    questionEl.textContent = '';
    if (progress < 5) {
      quiz()
      setTimeout(function(){ 
        resultsEl.textContent = '';
    }, 1000);
    } else {
      scoreEl.textContent = secondsLeft;
      secondsLeft = 0;
      resultsEl.textContent = '';
      questionText.textContent = '';
      winnerEl.style.display = 'block';
      return;
    }
  } else {
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
    if(secondsLeft <= 0 && progress < 5) {
      clearInterval(timerInterval);
      retryQuiz()
      }
    if(secondsLeft <= 0 && progress >= 5) {
      timeEl.textContent = '';
      clearInterval(timerInterval);
      }
  }, 1000);   
  quiz()  
}

function retryQuiz() {
  timeEl.textContent = '';
  questionText.textContent = '';
  questionEl.textContent = '';
  var h2 = document.createElement('h2')
  h2.textContent = 'Sorry, Please Try Again';
  greetingText.appendChild(h2);
  setTimeout(function(){ 
    location.reload();
  }, 1000);
}

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  var initialsEl = document.querySelector("#initials").value;
  var currentScores = JSON.parse(localStorage.getItem("allScores"));
  if(currentScores == null) currentScores = [];
    var highscore = {
        initials: initialsEl.trim(),
        score: scoreEl.textContent,
    };
  localStorage.setItem("highscore", JSON.stringify(highscore));
  currentScores.push(highscore);
  localStorage.setItem("allScores", JSON.stringify(currentScores));
  location.href = "highscore.html";
});

document.getElementById('startquiz').addEventListener('click', quizBegin);