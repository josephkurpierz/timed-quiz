var startButtonEl = document.querySelector(".start-btn");
var questionBoxEl = document.querySelector(".question-box")
var choiceButtonEl = document.querySelector(".choice-btn");
var questionEl = document.querySelector("#question");
var timeEl = document.querySelector("#time");
var frontPageEl = document.querySelector(".front-page");
var currentQuestion = 0;
var choiceBoxEl = document.querySelector(".choices");
var timerCount = 60;
var gradeEl = document.querySelector(".grade");

//question array to pull questions from
var questionArrEl =[
  {
    question: "how many ducks go quack?",
    choices: ["1","2","3","4"],
    correct: 1,
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["devTools", "a friend", "gitbash", "github"],
    correct: 1,
  },
  {
    question: "how helpful are the classes in bootcamp?",
    choices: ["a little" , "none", "like bubbles in space", "more confusing than anything"],
    correct: 3,
  },
  {
    question: "What does HTML stand for?",
    choices:["hypertext markup language", "cascading stylesheets", "I like turtles", "programmers in the wild"],
    correct: 1
  }
]

// front page card
var startButtonHandler = function(){
  frontPageEl.className = "hide";
  startTimer();
  startQuiz();
};

var startTimer = function(){
  var timeInterval = setInterval(function(){
    if (timerCount>=0){
      timeEl.textContent=timerCount;
      timerCount--;
    } else
    clearInterval(timeInterval);
  },1000);
};

//initiate quiz by pulling questions and choices from arrays
var startQuiz = function(){
  // for ( var i =0; i<questionArrEl.length; i++){
  renderQuestion(currentQuestion);//change for dynamics
  renderChoices(currentQuestion);
  currentQuestion++;
  // };
}

var renderQuestion = function(currentQuestion){
  questionEl.innerHTML="<h1 id='question' class='question'>"+ questionArrEl[currentQuestion].question+"</h1>";
  questionBoxEl.appendChild(questionEl);
};

var renderChoices = function (currentQuestion){
  for (var i =0; i<questionArrEl.length; i++){
    choiceButtonEl = document.createElement("button");
    choiceButtonEl.innerHTML = "<div class='choices'><div class='choice'><button class='btn choice-btn' id="+ i +">"+questionArrEl[currentQuestion].choices[i];+"</button></div></div>";
    choiceBoxEl.appendChild(choiceButtonEl);
  };
}

var answerHandler = function(event){
  var targetEl = event.target;
  var choice = targetEl.getAttribute("data-num");
  console.log(choice);
  if(choice === questionArrEl[currentQuestion].correct){
    gradeEl = document.createElement("div");
    //display correct
  } else{
    timerCount=timerCount-10;
    //display wrong
  }
  currentQuestion++
  if(currentQuestion < questionArrEl.length){
    renderQuestion(currentQuestion);
    renderChoices(currentQuestion);
  } else{
    var currentScore=timerCount;
    //go to complete page
  }
  // var selectedChoice = choiceButtonEl.getElementBy
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


startButtonEl.addEventListener("click",startButtonHandler);
choiceButtonEl.addEventListener("click", answerHandler);