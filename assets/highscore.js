var goBackBtn = document.getElementById('goBack');
var scoreDisplay = document.getElementById('scoreDiv')
var clearBtn = document.getElementById('clearScores')

function renderScores() {
    scoreDisplay.innerHTML = "";
    if (localStorage.getItem("highscore") === null) {
        allScores = highscoreList;
        return
    } 
    else {
  for (var i = 0; i < allScores.length; i++) {
    var highscoreList = JSON.parse(localStorage.getItem("allScores"));
    var li = document.createElement("li");
    var currentInitials = highscoreList[i].initials;
    var currentScore = highscoreList[i].score;
    li.textContent = currentInitials + ' - ' + currentScore;
    li.setAttribute("id", currentScore);
    var scoreItem = document.createElement("html");
    li.appendChild(scoreItem);
    scoreDisplay.appendChild(li);
    sortList();
    }
}}

function sortList() {
    var arr = [], list = document.getElementById('scoreDiv'),
        c = list.children, l = c.length, i;
    for(i=0; i<l; i++) arr[i] = c[i]; 
    arr.sort(function(a,b) {return a.id < b.id ? -1 : 1;});
    if( !sortList.direction) arr = arr.reverse();
    for(i=0; i<l; i++) list.appendChild(arr[i]);
};

function init() {
  var highscoreList = JSON.parse(localStorage.getItem("allScores"));
  if (highscoreList !== null) {
    allScores = highscoreList;
  }
  renderScores();
}

init();

goBackBtn.addEventListener("click", function(event) {
    event.preventDefault();
    location.href = "index.html";
    });

clearBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    renderScores();
    });