var goBackBtn = document.getElementById('goBack');
var scoreDisplay = document.getElementById('scoreDiv')
var clearBtn = document.getElementById('clearScores')

init();

function renderScores() {
  // Clear todoList element and update todoCountSpan
  scoreDisplay.innerHTML = "";
//   score.textContent = allScores.length;

  // Render a new li for each score
  for (var i = 0; i < allScores.length; i++) {
    var highscoreList = JSON.parse(localStorage.getItem("allScores"));
    var li = document.createElement("li");
    var currentInitials = highscoreList[i].initials;
    var currentScore = highscoreList[i].score;
    li.textContent = currentInitials + ' - ' + currentScore;
    li.setAttribute("data-index", i);

    var scoreItem = document.createElement("p");
    // scoreItem.textContent = currentInitials, "-", currentScore;
    console.log('currentScore:', currentScore)
    console.log('currentInitials:', currentInitials)

    li.appendChild(scoreItem);
    scoreDisplay.appendChild(li);
  }
}

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