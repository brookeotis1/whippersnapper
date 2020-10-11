var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");

//questions
let questions = [
    {
        question: "What is the best holiday of the year?",
        choiceA : "Wrong!",
        choiceB : "Correct!",
        choiceC : "Wrong!",
        correct :"B"
    },{
        question: "Who brought Halloween traditions to North America?",
        choiceA : "Wrong!",
        choiceB : "Wrong!",
        choiceC : "Correct!",
        correct :"C"
    },{
        question: "What is the best Halloween movie?",
        choiceA : "Correct!",
        choiceB : "Wrong!",
        choiceC : "Wrong!",
        correct :"A"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const quesionTime = 10; 
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = + q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz)

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}


function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }    
}



function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}
    
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        score++
        answerIsCorrect();
    }else{
        answerIsWrong();
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


function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreRender(){
    scoreDiv.style.display = "block";

    const scorePercent = Math.round(100 * score/questions.length);

}