var timeEl = document.getElementById('timer');
var questionEl = document.getElementById('questiondiv');
var resultsEl = document.getElementById('resultsdiv');
var greetingText = document.getElementById('greetingdiv');
var questionText = document.getElementById('questionheader')
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
  console.log('progress:', progress);
  console.log('currentquestion:', cq);
  questionText.textContent = questionArray[cq].question;
  console.log('textContent:', questionText.textContent);
  console.log('question:', questionArray[cq].question);
  for (var i = 0; i < 4; i++) {
      var li = document.createElement('li');
      li.setAttribute('class', 'button btn');
      li.setAttribute('id', [i]);
      console.log('i:', li.id)
      li.textContent = questionArray[cq].answers[i];
      var br = document.createElement('br');
      questionEl.appendChild(li);
      questionEl.appendChild(br);
  };  
};

questionEl.addEventListener('click', function(event) {
  var target = event.target;
  console.log('target:', target)
  if (target.id == questionArray[cq].correct) {
    console.log('correct:', questionArray[cq].correct)
    console.log('id:', target.id)
    resultsEl.textContent = 'Good Job'; 
    progress = progress +1;
    console.log('progress:', progress);
    questionEl.textContent = '';
    questionText.textContent = 'Your Score is ' + secondsLeft;
    if (progress < 4) {
      quiz()
      setTimeout(function(){ 
        resultsEl.textContent = '';
    }, 1000);
    } else {
      return;
    }
  } else {
    console.log('correct:', questionArray[cq].correct)
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
