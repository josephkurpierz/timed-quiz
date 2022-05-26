var startButtonEl = document.getElementById("start-btn");
var questionBoxEl = document.getElementById("question-box")
var choiceButtonEl = document.getElementById("choice-btn");
var questionEl = document.getElementById("question");
var timeEl = document.getElementById("time");
var frontPageEl = document.getElementById("front-page");
var currentQuestion = 0;
var choiceBoxEl = document.getElementById("choices");
var timerCount = 60;
var gradeEl = document.getElementById("grade");

//question array to pull questions from
var questionArrEl = [
  {
    question: "how many ducks go quack?",
    choices: ["1", "2", "3", "4"],
    correct: 1,
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["devTools", "a friend", "gitbash", "github"],
    correct: 1,
  },
  {
    question: "how helpful are the classes in bootcamp?",
    choices: ["a little", "none", "like bubbles in space", "more confusing than anything"],
    correct: 3,
  },
  {
    question: "What does HTML stand for?",
    choices: ["hypertext markup language", "cascading stylesheets", "I like turtles", "programmers in the wild"],
    correct: 1
  }
]

// front page card
var startButtonHandler = function () {
  frontPageEl.className = "hide";
  startTimer();
  startQuiz();
};

var startTimer = function () {
  var timeInterval = setInterval(function () {
    if (timerCount >= 0) {
      timeEl.textContent = timerCount;
      timerCount--;
    } else
      clearInterval(timeInterval);
  }, 1000);
};

//initiate quiz by pulling questions and choices from arrays
var startQuiz = function () {
  renderQuestion(currentQuestion);
  renderChoices(currentQuestion);
}

//load current question into questionbox
var renderQuestion = function (currentQuestion) {
  questionEl.innerHTML = "<h1 id='question' class='question'>" + questionArrEl[currentQuestion].question + "</h1>";
  questionBoxEl.appendChild(questionEl);
};

//load choice buttons into choices
var renderChoices = function (currentQuestion) {
  for (var i = 0; i < questionArrEl.length; i++) {
    
    choiceButtonEl = document.createElement("button");
    choiceButtonEl.innerHTML = "<button class='btn choice-btn' id='choice-btn' data-num='i'>" + questionArrEl[currentQuestion].choices[i]; +"</button>";
    choiceBoxEl.appendChild(choiceButtonEl);
  };
}

var answerHandler = function () {

  
  var dataNum = choiceButtonEl.getAttribute("data-num");
console.log(dataNum);
  gradeEl = document.createElement("div");
  if (dataNum === questionArrEl[currentQuestion].correct) {
    gradeEl.innerHTML = "<div id='grade' class='grade'>Correct!</div>";
  } else {
    timerCount = timerCount - 10;
    gradeEl.textContent = "Wrong!";
  }
  currentQuestion++
  hidePrevious();
  if (currentQuestion < questionArrEl.length) {
    renderQuestion(currentQuestion);
    renderChoices(currentQuestion);
  } else {
    var currentScore = timerCount;

    //go to complete page
  }
  // var selectedChoice = choiceButtonEl.getElementBy
}

var hidePrevious = function(){
  for (let i = 0; i < questionArrEl.length; i++) {
    // middle fingers
    
    
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


startButtonEl.addEventListener("click", startButtonHandler);
choiceBoxEl.addEventListener("click", answerHandler);