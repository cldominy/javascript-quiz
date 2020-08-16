// Variables from Front Page
var startBttn = document.querySelector("#play")
var startScreen = document.querySelector("#initial")
var questions = document.querySelector("#start")
var timeDisplay = document.querySelector("#time")
var questionTitle = document.querySelector("#question")
var choiceList = document.querySelector("#choices")

// Changing Variables
var timeLeft = questionList.length*15
var index = 0
var score = 0
var setIntervalID

// Start Button -> Hides main menu, sets timer, and presents first question
startBttn.onclick=function(){
    startScreen.classList.add("hide");
    questions.classList.remove("hide");
    setIntervalID = setInterval(countdown, 1000);
    generateQuestions();
}

// Timer Countdown -> Generates time, displays, and begins countdown. Ends quiz if the time ever hits 0
function countdown(){
      timeDisplay.textContent=timeLeft;
      timeLeft--;
    //   check if time has run out
      if (time <= 0){
        finishQuiz();
      }
}

// Stops Timer
function finishQuiz() {
    clearInterval(setIntervalID);
  }

// Begins generating the questions from the array above
function generateQuestions(){
    // Current Question Variable
var currentQuestion = questionList[index];
    // Updating title with current question
   questionTitle.textContent= currentQuestion.title;
    // Generating possible choices    
   var choices = currentQuestion.choices
   choiceList.textContent = ""
    // Looping through each choice
   currentQuestion.choices.forEach(function(choice, i) {
         var bttn = document.createElement("button")
         bttn.classList.add("choice", "btn", "btn-outline-info", "d-block")
         bttn.setAttribute("value", choice)
         bttn.textContent = choices[i]
         bttn.onclick = questionClick;
         choiceList.appendChild(bttn)
     });
  
}

function questionClick() {
    // If user is wrong
    console.log(this.value)
    if ((this.value) !== questionList[index].correctAnswer) {
      // Reduce time remaining
        timeLeft -= 15;
      // If user reduces time past 0, it remains at 0
        if (timeLeft < 0) {
            timeLeft = 0;}
      // Prompt user that they are incorrect
        console.log("Incorrect!")
      // Change the time display
        timeDisplay.textContent = timeLeft;
    } 
    // If user is right
    else {
      console.log("Correct!");
    }
    // Generating next question
    index++;
    // Checking for more questions 
    if (index === questionList.length) {
      quizEnd();
    } else {
        generateQuestions();
    }
  }
