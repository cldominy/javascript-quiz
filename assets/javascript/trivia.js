var startBttn = document.querySelector("#play")
var startScreen = document.querySelector("#initial")
var questions = document.querySelector("#start")
var timeDisplay = document.querySelector("#time")
var questionTitle = document.querySelector("#question")
var choiceList = document.querySelector("#choices")
var setIntervalID
var index = 0

var questionList = [
    {
        title: "Arrays in Javascript can be used to store ______.", 
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"  
    },

    {
        title: "Question 2", 
        choices: ["choice 21", "choice 22", "choice 23", "choice 24"],
        correctAnswer: "choice 21"  
    },

    {
        title: "Question 3", 
        choices: ["choice 31", "choice 32", "choice 33", "choice 34"],
        correctAnswer: "choice 34"  
    },

    {
        title: "Question 4", 
        choices: ["choice 41", "choice 42", "choice 43", "choice 44"],
        correctAnswer: "choice 42"  
    },

    {
        title: "Question 5", 
        choices: ["choice 51", "choice 52", "choice 53", "choice 54"],
        correctAnswer: "choice 53"  
    },
]

// Global Variables
var timeLeft = questionList.length*15
var score = 0
var currentQuestion = 0
var finalQuestion = questionList.length

// Start button hides start screen and shows first question list. It creates a time interval and starts timer
startBttn.onclick=function(){
    startScreen.classList.add("hide");
    questions.classList.remove("hide");
    setIntervalID = setInterval(countdown, 1000);

}

// Timer function. It decreaes every one second and displays the time remainin. If the time reaches zero or the last question is answered, the timer stops 
function countdown(){
      timeDisplay.textContent=timeLeft;
      timeLeft--;
      if (index < questionList.length){
        generateQuestions();
      }
      else {
          console.log("stop", setIntervalID);
          clearInterval(setIntervalID);
      }

}

// Begins generating the questions from the array above
function generateQuestions(){

   questionTitle.textContent= questionList[index].title;
   var choices = questionList[index].choices
   choiceList.textContent = ""
     for (let i = 0; i < choices.length; i++) {
         var li = document.createElement("li")
         var p = document.createElement("p")
         p.textContent = choices[i]
         li.appendChild(p)
         li.onclick=function(){
             if (index < questionList.length){
                index++;
             }
             else{
                clearInterval(setIntervalID);
             }
             
         }
         choiceList.appendChild(li)
     }
  
}

// Check the answer
function answerCheck(answer){
    correct = questionList.correctAnswer
    log.console(correct && currentQuestion !== finalQuestion);
    if (answer === correct){
        score++;
        console.log("This answer is correct");
        currentQuestion++
        generateQuestions();
    }
    else if (answer !== correct && currentQuestion !== finalQuestion){
        console.log("This answer is incorrect");
        currentQuestion++
        timeLeft-10;
        generateQuestions();
    }
    else{
        console.log("Congrats, you are done");
    }
}
