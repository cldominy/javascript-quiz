// Variables from Front Page
var startBttn = document.querySelector("#play");
var submitBttn = document.querySelector("#add");
var startScreen = document.querySelector("#initial");
var questions = document.querySelector("#start");
var timeDisplay = document.querySelector("#time");
var questionTitle = document.querySelector("#question");
var choiceList = document.querySelector("#choices");
var inputScore = document.querySelector("#input-highscore");
var viewScore = document.querySelector("#view-highscore");
var finalScore = document.querySelector("#final-score");
var userName = document.querySelector("#name");
var localScores = document.querySelector("#local-scores");

// Changing Variables
var timeLeft = questionList.length * 15;
var index = 0;
var setIntervalID;

// Start Button -> Hides main menu, sets timer, and presents first question
startBttn.onclick = function () {
  startScreen.classList.add("hide");
  questions.classList.remove("hide");
  setIntervalID = setInterval(countdown, 1000);
  generateQuestions();
};

// Timer Countdown -> Generates time, displays, and begins countdown. Ends quiz if the time ever hits 0
function countdown() {
  timeDisplay.textContent = timeLeft;
  timeLeft--;
  //   check if time has run out
  if (time <= 0) {
    finishQuiz();
  }
}

// Begins generating the questions from the array above
function generateQuestions() {
  // Updating title with current question
  questionTitle.textContent = questionList[index].title;
  // Generating possible choices
  var choices = questionList[index].choices;
  choiceList.textContent = "";
  // Looping through each choice
  questionList[index].choices.forEach(function (choice, i) {
    var bttn = document.createElement("button");
    bttn.classList.add("choice", "btn", "btn-outline-info", "d-block");
    bttn.setAttribute("value", choice);
    bttn.textContent = choices[i];
    bttn.onclick = questionClick;
    choiceList.appendChild(bttn);
  });
}

// Checking the Answers
function questionClick() {
  // Incorrect Answer!
  if (this.value !== questionList[index].correctAnswer) {
    timeLeft -= 15;
    // If user reduces time past 0, it remains at 0
    if (timeLeft < 0) {
      timeLeft = 0;
    }
    alert("Wrong!");
    // Change the time display
    timeDisplay.textContent = timeLeft;
  }
  // If user is right
  else {
    alert("Correct!");
  }
  // Generating next question
  index++;
  // Checking for more questions
  if (index === questionList.length) {
    finishQuiz();
  } else {
    generateQuestions();
  }
}

// Quiz has Ended (by time or other)
function finishQuiz() {
  clearInterval(setIntervalID);

  questions.classList.add("hide");
  inputScore.classList.remove("hide");
  finalScore.textContent = timeLeft;
}

// Submitting Highscore
submitBttn.onclick = function () {
  var initials = userName.value.trim();

  if (initials !== "") {
    var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

    var newScore = {
      score: timeLeft,
      initials: initials,
    };

    highscore.push(newScore);
    window.localStorage.setItem("highscore", JSON.stringify(highscore));

    window.location.href = "highscores.html";
  } else {
    alert("You must enter a valid initials to save your score!");
  }
};
