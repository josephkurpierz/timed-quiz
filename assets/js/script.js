
var choiceBtnEl = document.querySelector(".choice-btn");
var questionEl = document.querySelector("#question");
var timeEl = document.querySelector("#time");
var frontPageEl = document.querySelector(".front-page");
var questionBoxEl = document.querySelector(".question-box");


var questionArrEl =[
  {
    question: "how many ducks go quack?",
    choices: ["1","2","3","4"],
    correct: 1,
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["devTools", "a friend", "gitbash", "github"],
    correct: 0,
  },
]

// front page card
// recognize start-btn click
// hide front page
var startButtonHandler = function(){
  frontPageEl.className = "hide";
  renderQuestion(0);//change for dynamics
};

var renderQuestion = function(i){
  questionEl.innerHTML="<h1 class='question title'>"+ questionArrEl[i].question+"</h1>";
  questionBoxEl.appendChild(questionEl);
};

var renderChoices = function (i){
  for (var i =0; i<questionArrEl.length; i++){
    choiceButtonEl.textContent
  }
}
// question card
// start timer
// create and add question for the question card
// add answer-btns to question card
// recognize answer-btn click
// subtract time for incorrect guess
// display correct or wrong in footer
// create and add another question

// completed card
// create and display completed card
// display game score
// recognize submit-btn click
// store initials to localstorage as array
// store score to local storage as array

// high score page 
// retrieve high scores from local storage


document.addEventListener("click",startButtonHandler);