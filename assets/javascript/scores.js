// Global Variables
var localScores = document.querySelector("#local-scores");
var clearBttn = document.querySelector("#clear-score");

// Saving and Displaying Highscores to Local Computer

function displayScores() {
  var highscores = JSON.parse(window.localStorage.getItem("highscore"));

  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    var liScores = document.createElement("li");
    liScores.textContent = score.initials + " - " + score.score;

    localScores.appendChild(liScores);
  });
}

clearBttn.onclick = function () {
  window.localStorage.removeItem("highscore");
  window.location.reload();
};

// Running Function
displayScores();
