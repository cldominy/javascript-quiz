# javascript-quiz

Psuedo Code 

GIVEN I am taking a code quiz

WHEN I click the start button
* Start button in html
THEN a timer starts and I am presented with a question
* Onclick event for start button 
    event will start a timer (75 seconds)
    event will pull up the first question from hide/show

WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
* Question Array (5 questions total - 15 secs per question)
    Even will generate a question (P) with 4 choices 
    Each choice will be a button to be selected (clear default function)
    3 choices have class/id of wrong, 1 of correct
    If/else statement for correct/incorrect selection 
        If wrong - substract time from timer (15 seconds)
        If correct - nothing changes to timer 
        Each option, once selected, creates another 



WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score