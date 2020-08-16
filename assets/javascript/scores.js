// Global Variables
var localScores = document.querySelector("#local-scores");
var clearBttn = document.querySelector("#clear-score")

// Saving and Displaying Highscores to Local Computer 

function displayScores() {

    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      var liScores = document.createElement("li");
      liScores.textContent = score.initials + " - " + score.score;
  
      // display on page
      localScores.appendChild(liScores);
    });
  };
  
  clearBttn.onclick=function(){
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  // run function when page loads
  displayScores();
  