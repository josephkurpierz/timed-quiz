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
var currentScore = 0;
var inputEl = document.getElementById("initials");
var submitBtnEl = document.getElementById("submit-btn");
var scoreEl = document.getElementById("score");


//question array to pull questions from
var questionArrEl = [
  {
    question: "how many ducks go quack?",
    choices: ["1", "2", "3", "4"],
    correct: "1",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["devTools", "a friend", "gitbash", "github"],
    correct: "devTools",
  },
  {
    question: "how helpful are the classes in bootcamp?",
    choices: ["a little", "none", "like bubbles in space", "more confusing than anything"],
    correct: "like bubbles in space",
  },
  {
    question: "What does HTML stand for?",
    choices: ["hypertext markup language", "cascading stylesheets", "I like turtles", "programmers in the wild"],
    correct: "hypertext markup language"
  }
];

// front page card
var startButtonHandler = function () {
  frontPageEl.className = "hide";
  startTimer();
  startQuiz();
};
var timeInterval=0;
var startTimer = function () {
  timeInterval = setInterval(function () {
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
  questionEl=document.createElement("h1");
  questionEl.className="question";
  questionEl.textContent= questionArrEl[currentQuestion].question;
  questionBoxEl.appendChild(questionEl);
};

//load choice buttons into choices
var renderChoices = function (currentQuestion) {
  for (var i = 0; i < questionArrEl.length; i++) {
    choiceButtonEl = document.createElement("button");
    choiceButtonEl.className = "choice-btn btn";
    choiceButtonEl.textContent= questionArrEl[currentQuestion].choices[i];
    choiceBoxEl.appendChild(choiceButtonEl);
  };
}

// after first question is answered, runs through other questions
// subtracting time for incorrect choices
var answerHandler = function (event) {
  var targetEl = event.target;
  var choiceIndex = targetEl.outerText;
  gradeEl = document.createElement("div");
  gradeEl.className = "grade"
  if (choiceIndex !== questionArrEl[currentQuestion].correct) {
      timerCount = timerCount - 10;
  }
  currentQuestion++
  hidePrevious();
  if (currentQuestion < questionArrEl.length) {
    renderQuestion(currentQuestion);
    renderChoices(currentQuestion);
  } else {
    clearInterval(timeInterval);
    currentScore = timerCount;
    timeEl.textContent = currentScore;
    renderCompletePage();
  };
};

//display the endgame page with player score
var renderCompletePage = function(){
  var completedPageEl = document.getElementById("completed");
  completedPageEl.classList.remove("hide");
  scoreEl.textContent = currentScore;
};

//remove last question and choice boxes
var hidePrevious = function () {
  while (choiceBoxEl.lastChild) {
    choiceBoxEl.removeChild(choiceBoxEl.lastChild);
  };
  questionBoxEl.removeChild(questionEl);
};

var scoreStorageArr=[];
var scoreStorageObj;
//submit button to store high score
var endgame = function(){
  retrievedScores = localStorage.getItem("highScores");
  if (retrievedScores !== null){
    retrievedArr = JSON.parse(retrievedScores);
    for(var i=0; i < retrievedArr.length; i++){
      scoreStorageArr.push(retrievedArr[i]);
    }
  }
  scoreStorageObj = {
    initials: inputEl.value,
    score: currentScore,
  };
  scoreStorageArr.push(scoreStorageObj);
 
  localStorage.setItem("highScores", JSON.stringify(scoreStorageArr));
  
};

startButtonEl.addEventListener("click", startButtonHandler);
choiceBoxEl.addEventListener("click", answerHandler);
submitBtnEl.addEventListener("click", endgame);
