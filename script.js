var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
// var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");



//Questions being asked are in array
var questions = [
    {
      question: "Who invented JavaScript?",
      choiceA: "Douglas Crockford",
      choiceB: "Sheryl Sandberg",
      choiceC: "Brendan Eich",
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      choiceA: "Node.js",
      choiceB: "TypeScript",
      choiceC: "npm",
      correctAnswer: "c"
    },
    {
      question: "How do you create a function in JavaScript?",
      choiceA: "function = myFuntion()",
      choiceB: "function: myFuntion()",
      choiceC: "function myFunction()",
      correctAnswer: "a"
    },
    {
      question: "How to write an IF statement in JavaScript?",
      choiceA: "if (i == 5)",
      choiceB: "if i = 5",
      choiceC: "if i == 5 then",
      correctAnswer: "a"
    },
    {
      question: "How do you declare a JavaScript variable?",
      choiceA: "variable carName;",
      choiceB: "var carName;",
      choiceC: "v carName;",
      correctAnswer: "b"
    }
  ];


var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;
var questionTime = 20;
var gaugeWidth = 150;
var gaugeUnit = gaugeWidth/questionTime;
var TIMER;
var score = 0;


//Function for selecting a question
function renderQuestion() {
  var q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>"
//  qImg.innerHTML = "<img src =>" + q.imgSrc + ">"
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz)

//start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter,1000);
};

// Green and red circles that show if correct or wrong
function renderProgress() {
  for(var i = 0; i <= lastQuestion; i++) {
    progress.innerHTML += "<div class= 'prog' id=" + i + "></div>";
  }
}

 // /timer for question
function renderCounter() {
  if (count <= questionTime){
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  }else{
    count = 0;
    answerIsWrong();
    if (runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    }else{
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

function checkAnswer(answer){
  if( answer === questions[runningQuestion].correctAnswer){
      score++;
      console.log("good")
      answerIsCorrect();
  }else{
      answerIsWrong();
      console.log("bad")
  }
  count = 0;
  if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
  }else{
      clearInterval(TIMER);
      scoreRender();
  }
}

// Color green for cicrle
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#00FF00"
}

// Color red for cicrle
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#FF0000"
}

function scoreRender() {
  scoreDiv.style.display = "block";
  var scorePercent = Math.round(100 * score/questions.length);
  // console.log("hello")
  // console.log(scorePercent)
  localStorage.getItem("score")
  localStorage.setItem("score", scorePercent)


  var img = (scorePercent >= 80) ? "img/5.png" :
            (scorePercent >= 60) ? "img/4.png" :
            (scorePercent >= 40) ? "img/3.png" :            
            (scorePercent >= 20) ? "img/2.png" :
            "img/1.png"

            scoreDiv.innerHTML = "<img src="+ img +">";
            scoreDiv.innerHTML += "<p>"+ scorePercent +"%</p>";
}


































































// var startButton = document.getElementById('start-btn')
// var quesContainer = document.getElementById('quesContainer')

// var score = 0;

// ///////////////////////////////////////////////////////
// //Creating a Start Button
// startButton.addEventListener('click', startGame)

// function startGame() {
//     console.log('started')
// }

// function nextQuestion() {

// }

// function selectAnswer() {

// }




// // Array with objects inside that has questions



// // for (var i=0; i < questions.length; i++) {
// //  // var response = prompt(questions[i]);

// //   if (response == questions[i].correctAnswer) {
// //       score++;
// //       alert("✅");
// //   } else {
// //       count-=40;
// //       alert("❌! 20 seconds were taken off the timer for giving incorrect response");
// //     }
// // };













// /////////////////////////////////////////////////////////
// // for (var i=0; i < questions.length; i++) {
// //   var response = prompt(questions[i]);

// //   if (response == questions[i].correctAnswer) {
// //       score++;
// //       alert("✅");
// //   } else {
// //      count-=20;
// //      alert("❌! 20 seconds were taken off the timer for giving incorrect response");
// //     }
// // };





// //Function for counter
// var count = 180;
// var interval = setInterval(function(){
//   document.getElementById('count').textContent=count;
//   count--;
//   if (count === 0){
//     clearInterval(interval);
//     document.getElementById('count').textContent='Done';
//     // or...
//     alert("You're out of time!");
//   }
// }, 1000);









// /////////////////////////////////////////////////////////
// //   var s = question.sort(sortingFunction);
    
// // function sortingFunction(a, b) {
// //     return 0.5 - Math.random();
// //   }

// //   console.log(s)




