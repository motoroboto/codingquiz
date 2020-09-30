var goBackBtn = document.getElementById('goBack');
var scoreDisplay = document.getElementById('scoreDiv')
var clearBtn = document.getElementById('clearScores')

init();

function renderScores() {
  // Clear todoList element and update todoCountSpan
  scoreDisplay.innerHTML = "";
//   score.textContent = allScores.length;
if (localStorage.getItem("highscore") === null) {
    allScores = highscoreList;
    return
    }    else {

  // Render a new li for each score
  for (var i = 0; i < allScores.length; i++) {
    var highscoreList = JSON.parse(localStorage.getItem("allScores"));
    var li = document.createElement("li");
    var currentInitials = highscoreList[i].initials;
    var currentScore = highscoreList[i].score;
    li.textContent = currentInitials + ' - ' + currentScore;
    li.setAttribute("id", currentScore);

    var scoreItem = document.createElement("html");
    // scoreItem.textContent = currentInitials, "-", currentScore;
    console.log('currentScore:', currentScore)
    console.log('currentInitials:', currentInitials)

    li.appendChild(scoreItem);
    scoreDisplay.appendChild(li);
    sortList();
  }}
}

function sortList() {
    // sortList.direction = sortList.direction ? false : true;
    var arr = [], list = document.getElementById('scoreDiv'),
        c = list.children, l = c.length, i;
    for(i=0; i<l; i++) arr[i] = c[i]; // "convert" NodeList to array
    arr.sort(function(a,b) {return a.id < b.id ? -1 : 1;}); //sorting function ends here.
    if( !sortList.direction) arr = arr.reverse();
    for(i=0; i<l; i++) list.appendChild(arr[i]);
};

function init() {
  // Get stored allScores from localStorage
  // Parsing the JSON string to an object
  var highscoreList = JSON.parse(localStorage.getItem("allScores"));
  console.log('highscoreList:', highscoreList)

  // If allScores were retrieved from localStorage, update the allScores array to it
  if (highscoreList !== null) {
    allScores = highscoreList;
  }

//   Render allScores to the DOM
  renderScores();
}



  goBackBtn.addEventListener("click", function(event) {
    event.preventDefault();
      location.href = "index.html";
    });

    clearBtn.addEventListener("click", function(event) {
        event.preventDefault();
        localStorage.clear();
        renderScores();
        });